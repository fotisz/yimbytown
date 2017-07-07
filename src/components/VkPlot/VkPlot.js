//@flow
import React, { Component, PureComponent } from "react";
import style from "./styleVkPlot.scss";
import { pure } from "recompose";
import { scaleLinear } from "d3-scale";
import uniqueId from "lodash/uniqueId";
import { timer } from "d3-timer";
import range from "lodash/range";
import { KJ, VF } from "constants";
import type { DotDatum } from "src/types";
import { line, curveCatmullRom, curveMonotoneX } from "d3-shape";

const WIDTH = 500;
const HEIGHT = 400;
const MAR = 0;
const x = scaleLinear().domain([0, KJ]).range([0, WIDTH]);
const y = scaleLinear().domain([0, VF * 1.2]).range([HEIGHT, 0]);
const pathMaker = line().x(d => x(d.k)).y(d => y(d.v));

class Lane extends PureComponent {
	componentDidMount() {
		let last = 0;
		let T = timer(elapsed => {
			let δ = (elapsed - last) / 75;
			this.setState(({ cars }) => {
				return {
					cars: cars.map(d => ({
						id: d.id,
						x: (d.x + δ * this.props.v) % HEIGHT
					}))
				};
			});
			last = elapsed;
		});
	}
	constructor(props: Object) {
		super(props);
		let numCars = Math.floor(HEIGHT / 200 * props.k);
		this.state = {
			cars: range(numCars).map(d => ({
				id: uniqueId(),
				x: d * HEIGHT / numCars
			}))
		};
	}
	render() {
		return (
			<g className={style.lane} transform={`translate(${x(this.props.k)},0)`}>
				{this.state.cars.map(d => (
					<rect
						key={d.id}
						x="-2"
						y="-3"
						width="4"
						height="6"
						className={style.car}
						transform={`translate(0,${d.x})`}
					/>
				))}
			</g>
		);
	}
}

const Lanes = pure(({ dots, scale }) => {
	let n = 20;
	return (
		<g>
			{range(0, KJ, KJ / n).map(k => <Lane k={k} v={scale(k)} key={k} />)}
		</g>
	);
});

class Dot extends PureComponent {
	onMouseDown = e => {
		let id = this.props.id;
		if (id == "a" || id == "b") return;
		e.preventDefault();
		this.props.onMouseDown(id);
	};
	onContextMenu = e => {
		let id = this.props.id;
		if (id == "a" || id == "b") return;
		e.preventDefault();
		this.props.onContextMenu(id);
	};
	render() {
		return (
			<g
				onMouseDown={this.onMouseDown}
				onContextMenu={this.onContextMenu}
				transform={`translate(${x(this.props.k)},${y(this.props.v)})`}
			>
				<circle r="13" className={style.selector} />
				<circle r="5" className={style.dot} />
			</g>
		);
	}
}

export default class VkPlot extends PureComponent {
	isDragging = false;
	selected = "";
	g: Element;
	props: {
		updateDot: Function,
		addDot: Function,
		dots: Array<DotDatum>
	};

	selectDot = (id: string) => {
		if (id == "a" || id == "b") return;
		this.isDragging = true;
		this.selected = id;
	};

	onMouseUp = () => {
		this.isDragging = false;
	};

	onMouseMove = (e: MouseEvent) => {
		if (!this.isDragging) return;
		let k = x.invert(e.clientX - this.g.getBoundingClientRect().left);
		let v = y.invert(e.clientY - this.g.getBoundingClientRect().top);
		this.props.updateDot(this.selected, k, v);
	};

	getKV = (e: MouseEvent) => {
		let { left, top } = this.g.getBoundingClientRect();
		return {
			k: x.invert(e.clientX - left),
			v: y.invert(e.clientY - top)
		};
	};

	onClick = (e: MouseEvent) => {
		let { k, v } = this.getKV(e);
		this.isDragging = true;
		this.selected = uniqueId();
		this.props.addDot(this.selected, k, v);
		this.props.updateDot(this.selected, k, v);
	};

	render() {
		return (
			<svg
				className={style.svg}
				width={WIDTH + 2 * MAR}
				height={HEIGHT + 2 * MAR}
			>
				<g
					onMouseMove={this.onMouseMove}
					onMouseUp={this.onMouseUp}
					ref={d => (this.g = d)}
					transform={`translate(${MAR},${MAR})`}
				>
					<rect
						onMouseDown={this.onClick}
						className={style.bg}
						width={WIDTH}
						height={HEIGHT}
					/>
					{<Lanes scale={this.props.scale} dots={this.props.dots} />}

					{this.props.dots.map((d, i) => (
						<Dot
							key={i}
							{...d}
							onMouseDown={this.selectDot}
							onContextMenu={this.props.deleteDot}
						/>
					))}
					<path className={style.line} d={pathMaker(this.props.dots)} />
				</g>
			</svg>
		);
	}
}
