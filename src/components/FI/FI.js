//@flow
import React, { Component, PureComponent } from "react";
import style from "./styleFI.scss";
import { pure } from "recompose";
import { scaleLinear } from "d3-scale";
import uniqueId from "lodash/uniqueId";
import { timer } from "d3-timer";
import range from "lodash/range";
import map from "lodash/map";
import { KJ, VF } from "constants";
import type { DotDatum } from "src/types";
import { line, curveCatmullRom } from "d3-shape";
import { axisLeft, axisBottom } from "d3-axis";
import { select } from "d3-selection";
const WIDTH = 500;
const HEIGHT = 20;
const x = scaleLinear().domain([0, KJ]).range([0, WIDTH]);
const y = scaleLinear().domain([0, VF * 1.2]).range([HEIGHT, 0]);
const KM = 100;
class Road extends PureComponent {
	render() {
		return (
			<svg width={WIDTH} height={HEIGHT}>
				<rect className={style.lane} width={WIDTH} height={HEIGHT} />
				<g transform={`translate(0,${HEIGHT / 2})`}>
					{this.props.cars.map(d => (
						<rect
							width="8"
							height="4"
							x="-4"
							y="-2"
							key={d.id}
							className={style.car}
							transform={`translate(${d.x},0)`}
						/>
					))}
				</g>
			</svg>
		);
	}
}

export default class FunIdentity extends PureComponent {
	timer = null;
	paused = true;
	startTimer = () => {
		let last = 0;
		this.timer = timer(elapsed => {
			const δ = (elapsed - last) / 75;
			last = elapsed;
			const scale = this.props.scale;
			let numCars = this.state.cars.length;
			let v;
			const cars = map(this.state.cars, (d, i, k) => {
				v = i < numCars-1 ? scale(KM / (k[i + 1].x - d.x)) : VF;
				return {
					id: d.id,
					x: d.x + δ * v
				};
			}).filter(d => d.x < WIDTH);
			if (cars[0].x > KM / this.state.k)
				cars.unshift({ id: uniqueId(), x: cars[0].x - KM / this.state.k });
			this.setState({ cars });
		});
	};
	pausePlay = () => {
		if (this.timer) {
			this.timer.stop();
			this.timer = null;
		} else {
			this.startTimer();
		}
	};
	constructor(props) {
		super(props);
		let k = 5;
		let space = KM / k;
		let cars = range(0, WIDTH / KM * k).map(d => ({
			id: uniqueId(),
			x: d * space
		}));
		this.state = {
			k,
			cars
		};
	}
	onChange = e => {
		this.setState({
			k: e.target.value
		});
	};
	render() {
		return (
			<div>
				<div>
					<input
						type="range"
						onChange={this.onChange}
						value={this.state.k}
						min="1"
						max={KJ}
					/>
					<button onClick={this.pausePlay}>Toggle</button>
				</div>
				<Road cars={this.state.cars} />
			</div>
		);
	}
}
