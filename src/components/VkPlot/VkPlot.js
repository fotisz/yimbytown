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
import { line, curveCatmullRom } from "d3-shape";
import { axisLeft, axisBottom, axisTop } from "d3-axis";
import { select } from "d3-selection";

const WIDTH = 500;
const HEIGHT = 300;
const MAR = 40;
const x = scaleLinear().domain([0, KJ]).range([0, WIDTH]);
const y = scaleLinear().domain([0, VF * 1.2]).range([HEIGHT, 0]);
const pathMaker = line().x(d => x(d.k)).y(d => y(d.v));

class Lane extends PureComponent {
	componentDidMount() {
		let last = 0;
		this.T = timer(elapsed => {
			let δ = (elapsed - last) / 75;
			this.setState(({ cars }) => {
				return {
					cars: cars.map(d => ({
						id: d.id,
						x: (d.x + δ * this.props.v) % (HEIGHT + 8)
					}))
				};
			});
			last = elapsed;
		});
	}
	constructor(props: Object) {
		super(props);
		let numCars = Math.round(HEIGHT / 150 * props.k);
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
				<rect className={style.road} height={HEIGHT} width="8" />
				{this.state.cars.map(d => (
					<rect
						key={d.id}
						x="2"
						y="-8"
						width="4"
						height="8"
						className={style.car}
						transform={`translate(0,${d.x + 10})`}
					/>
				))}
			</g>
		);
	}
}

const Lanes = pure(({ dots, scale }) => {
	let n = 25;
	return (
		<g>
			{range(0, KJ, KJ / n).map(k => <Lane k={k} v={scale(k)} key={k} />)}
		</g>
	);
});

class Dot extends PureComponent {
	onMouseDown = e => {
		let id = this.props.id;
		e.preventDefault();
		this.props.onMouseDown(id);
	};
	onContextMenu = e => {
		let id = this.props.id;
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
		dots: Array<DotDatum>,
		scale: Function,
		deleteDot: Function
	};

	selectDot = (id: string) => {
		this.isDragging = true;
		this.selected = id;
	};

	onMouseUp = () => {
		this.isDragging = false;
	};

	onMouseMove = (e: MouseEvent) => {
		if (!this.isDragging) return;
		let { k, v } = this.getKV(e);
		this.props.updateDot(this.selected, k, v);
	};

	getKV = (e: MouseEvent) => {
		let { left, top } = this.rect.getBoundingClientRect();
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

	componentDidMount() {
		select(this.gTop).call(axisTop().scale(x));
		select(this.gLeft).call(axisLeft().scale(y));
	}

	render() {
		return (
			<svg
				ref={d => (this.svg = d)}
				className={style.svg}
				width={WIDTH + 2 * MAR}
				height={HEIGHT + 2 * MAR}
			>
				<defs>
					<clipPath id="hello">
						<rect width={WIDTH} height={HEIGHT} />
					</clipPath>
				</defs>
				<g transform={`translate(${MAR},${MAR})`}>
					<g ref={d => (this.gTop = d)} transform={`translate(0,${0})`}>
						<g transform={`translate(${WIDTH / 2},-30)`}>
							<text className={style.axisLabel}>density</text>
						</g>
					</g>
					<g ref={d => (this.gLeft = d)}>
						<g transform={`translate(-35,${HEIGHT / 2}) rotate(-90)`}>
							<text className={style.axisLabel}>speed</text>
						</g>
					</g>
				</g>
				<g
					clipPath="url(#hello)"
					onMouseUp={this.onMouseUp}
					transform={`translate(${MAR},${MAR})`}
					onMouseMove={this.onMouseMove}
				>
					<rect
						onMouseDown={this.onClick}
						className={style.bg}
						width={WIDTH}
						height={HEIGHT}
						ref={d => (this.rect = d)}
					/>
					{<Lanes scale={this.props.scale} dots={this.props.dots} />}

					{this.props.dots
						.slice(1, this.props.dots.length - 1)
						.map((d, i) => (
							<Dot
								key={d.id}
								k={d.k}
								v={d.v}
								id={d.id}
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
