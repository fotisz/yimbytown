//@flow
import React, { Component, PureComponent } from "react";
import style from "./styleFI.scss";
import { pure } from "recompose";
import { scaleLinear } from "d3-scale";
import uniqueId from "lodash/uniqueId";
import { timer, timerFlush, timeout, interval } from "d3-timer";
import range from "lodash/range";
import map from "lodash/map";
import { KJ, VF, K0, Q0, W } from "constants";
import type { DotDatum } from "src/types";
import { select } from "d3-selection";
const WIDTH = 500;
const ROAD_WIDTH = 700;
const POOL_WIDTH = 200;
const HEIGHT = 20;
const KM = 100;
const ROAD_HEIGHT = 20;
const TIME_UNIT = 50;
const LANE_LENGTH = 600;
const QK = k => {
	if (k <= K0) return k * VF;
	if (k < KJ) return Q0 - W * (k - K0);
	return 0;
};

const VS = s => QK(1000 / s) * s / 3600; //m/s

const xScale = scaleLinear().domain([0, LANE_LENGTH]).range([0, ROAD_WIDTH]);

const Road = pure(({ cars }) => (
	<g>
		<rect className={style.lane} width={ROAD_WIDTH} height={HEIGHT} />
		<g>
			{map(cars, d => (
				<rect
					width="3"
					height={ROAD_HEIGHT - 4}
					x="-4"
					y="2"
					key={d.id}
					className={style.car}
					transform={`translate(${xScale(d.x)},0)`}
				/>
			))}
		</g>
	</g>
));

const Pool = pure(({ poolSize }) => {
	return (
		<g transform={`translate(${ROAD_WIDTH},0)`}>
			<rect className={style.pool} width={POOL_WIDTH} height={HEIGHT} />
			<g transform={`translate(0,${HEIGHT / 2})`}>
				{range(0, poolSize).map(d => (
					<rect
						x={d * 10}
						y="-2"
						className={style.carExited}
						width="8"
						height="4"
						key={d}
					/>
				))}
			</g>
		</g>
	);
});

class FI extends PureComponent {
	timer = null;

	startTimer = () => {
		let last = 0;
		let z = 0;
		this.timer = timer(elapsed => {
			const δ = (elapsed - last) / TIME_UNIT;
			last = elapsed;
			let v = VS(1000 / this.state.k);
			let cars = this.state.cars.filter(d => d.x < LANE_LENGTH);
			this.setState(({ cars, poolSize }) => {
				cars = map(cars, d => {
					let newX = d.x + δ * v;

					if (newX > LANE_LENGTH) {
						newX -= LANE_LENGTH;
						poolSize = poolSize + 1;
						timeout(() => {
							this.setState(({ poolSize }) => ({
								poolSize: Math.max(poolSize - 1, 0)
							}));
						}, 2000);
					}
					return {
						id: d.id,
						x: (d.x + δ * v) % LANE_LENGTH
					};
				});

				return {
					cars,
					poolSize
				};
			});
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
		let k = 8;
		let cars = createCars(k);
		this.state = {
			k,
			cars,
			poolSize: 0
		};
	}
	onChange = e => {
		let k = +e.target.value;
		this.setState({
			k,
			cars: createCars(k)
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
						min="0"
						step="0.5"
						max={KJ}
					/>
					<button onClick={this.pausePlay}>Toggle</button>
				</div>
				<svg width={ROAD_WIDTH + POOL_WIDTH} height={HEIGHT}>
					<Road cars={this.state.cars} />
					<Pool poolSize={this.state.poolSize} />
				</svg>
			</div>
		);
	}
}

function createCars(k: number): Array<{ id: string, x: number }> {
	let space = 1000 / k;
	return range(0, LANE_LENGTH / 1000 * k).map(d => ({
		id: uniqueId(),
		x: d * space
	}));
}

const App = () => <FI />;

export default App;
