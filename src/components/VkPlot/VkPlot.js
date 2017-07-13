//@flow
import React, { Component, PureComponent } from "react";
import style from "./styleVkPlot.scss";
import shared from "src/styleShared.scss";
import { pure } from "recompose";
import { scaleLinear } from "d3-scale";
import QkPlot from "components/QkPlot";
import { timer } from "d3-timer";
import { KJ, VF } from "constants";
import uniqueId from "lodash/uniqueId";
import range from "lodash/range";
import moize from "moize";
import type { DotDatum } from "src/types";
import { line } from "d3-shape";
import { axisLeft, axisBottom, axisTop } from "d3-axis";
import { select } from "d3-selection";
import bind from "memoize-bind";

const MAR = 40;
const getScale = moize((dots: Array<DotDatum>) => {
	return scaleLinear().domain(dots.map(d => d.k)).range(dots.map(d => d.v));
});
const getX = moize(width => scaleLinear().domain([0, KJ]).range([0, width]));
const getY = moize(height => scaleLinear().domain([0, VF*1.1]).range([height, 0]));
const LANE_LENGTH = 200; //meters
const getY2 = moize(height =>
	scaleLinear().domain([0, LANE_LENGTH]).range([0, height*1.2])
);
const getPathMaker = moize((x, y) => line().x(d => x(d.k)).y(d => y(d.v)));
const NUM_LANES = 10;
const LANES_RANGE = range(5, KJ, KJ / NUM_LANES);
const TIME_UNIT = 200;

export default class App extends PureComponent {
	state: {
		dots: Array<DotDatum>
		// paused: bool
	};

	state = {
		dots: [{ id: "a", k: 0, v: VF, q: 0 }, { id: "b", k: KJ, v: 0, q: 0 }],
		paused: true
	};

	deleteDot = (id: string) => {
		this.setState(({ dots }) => ({
			dots: dots.filter(d => d.id !== id)
		}));
	};

	updateDot = (id: string, k: number, v: number) => {
		this.setState(({ dots }) => ({
			dots: dots.map((d, i) => {
				if (d.id !== id) return d;
				v = Math.max(Math.min(dots[i - 1].v, v), dots[i + 1].v);
				k = Math.min(dots[i + 1].k, Math.max(dots[i - 1].k, k));
				return { id: d.id, k, v, q: k * v };
			})
		}));
	};

	addDot = (id: string, k: number, v: number) => {
		this.setState(({ dots }) => ({
			dots: dots.concat({ id, k, v, q: k * v }).sort((a, b) => a.k - b.k)
		}));
	};

	toggle = () => {
		this.setState(({ paused }) => ({ paused: !paused }));
	};

	render() {
		let scale = getScale(this.state.dots);
		return (
			<div className={style.main}>
				<div className={style.plot}>
					<VkPlot
						scale={scale}
						dots={this.state.dots}
						addDot={this.addDot}
						updateDot={this.updateDot}
						deleteDot={this.deleteDot}
						paused={this.state.paused}
					/>
				</div>
				<div style={{textAlign: 'center'}}>
				<div  className={shared.button} onClick={this.toggle}>TOGGLE</div>
				</div>
			</div>
		);
	}
}
// <QkPlot scale={scale} dots={this.state.dots} />

class Lane extends PureComponent {
	constructor(props: Object) {
		super(props);
		let numCars = Math.floor(props.k * LANE_LENGTH / 1000);
		let space = LANE_LENGTH / numCars;
		this.state = {
			cars: range(numCars).map(d => ({ id: uniqueId(), y: d * space }))
		};
	}

	componentWillUnmount() {
		if (this.T) this.T.stop();
	}

	startTimer() {
		let last = 0;
		this.T = timer(elapsed => {
			let δ = (elapsed - last) / TIME_UNIT;
			this.setState(({ cars }) => ({
				cars: cars.map(d => ({
					id: d.id,
					y: (d.y + δ * this.props.v) % LANE_LENGTH
				}))
			}));
			last = elapsed;
		});
	}

	componentDidMount() {
		if (!this.props.paused) this.startTimer();
	}

	componentWillUpdate({ paused }) {
		if (paused !== this.props.paused) {
			if (paused) this.T.stop();
			else this.startTimer();
		}
	}

	render() {
		let y = getY2(this.props.height);
		return (
			<g
				className={style.lane}
				transform={`translate(${this.props.x(this.props.k)},0)`}
			>
				<rect className={style.road} height={this.props.height} width="8" />
				{this.state.cars.map(d => (
					<rect
						key={d.id}
						x="2"
						y="-8"
						width="4"
						height="8"
						className={style.car}
						transform={`translate(0,${y(d.y)})`}
					/>
				))}
			</g>
		);
	}
}

const Dot = pure(({ onMouseDown, onContextMenu, k, v, x, y }) => (
	<g
		onMouseDown={onMouseDown}
		onContextMenu={onContextMenu}
		transform={`translate(${x(k)},${y(v)})`}
	>
		<circle r="13" className={style.selector} />
		<circle r="5" className={style.dot} />
	</g>
));

class VkPlot extends PureComponent {
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

	state = {
		height: 500,
		width: 500
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
		let x = getX(this.state.width);
		let y = getY(this.state.height);
		return {
			k: x.invert(e.clientX - left),
			v: y.invert(e.clientY - top)
		};
	};

	deleteDot = (id: string, e: MouseEvent) => {
		e.preventDefault(), this.props.deleteDot(id);
	};

	onClick = (e: MouseEvent) => {
		let { k, v } = this.getKV(e);
		this.isDragging = true;
		this.selected = uniqueId();
		this.props.addDot(this.selected, k, v);
		this.props.updateDot(this.selected, k, v);
	};

	resize = () => {
		this.setState(
			{
				width: this.svg.clientWidth - 2 * MAR,
				height: this.svg.clientHeight - 2 * MAR
			},
			() => {
				let x = getX(this.state.width);
				let y = getY(this.state.height);
				select(this.gTop).call(axisTop().scale(x));
				select(this.gLeft).call(axisLeft().scale(y));
			}
		);
	};

	componentWillUnmount() {
		window.removeEventListener("resize", this.resize);
	}

	componentDidMount() {
		window.addEventListener("resize", this.resize);
		this.resize();
	}

	render() {
		const { width, height } = this.state;
		const x = getX(width);
		const y = getY(height);
		const pathMaker = getPathMaker(x, y);
		return (
			<svg ref={d => (this.svg = d)} className={style.svg}>
				<defs>
					<clipPath id="hello">
						<rect width={width} height={height} />
					</clipPath>
				</defs>
				<g transform={`translate(${MAR},${MAR})`}>
					<g ref={d => (this.gTop = d)} transform={`translate(0,${0})`}>
						<g transform={`translate(${width / 2},-30)`}>
							<text className={style.axisLabel}>density (veh/km)</text>
						</g>
					</g>
					<g ref={d => (this.gLeft = d)}>
						<g transform={`translate(-35,${height / 2}) rotate(-90)`}>
							<text className={style.axisLabel}>speed (km/hr)</text>
						</g>
					</g>
				</g>
				<g
					clipPath="url(#hello)"
					onMouseUp={this.onMouseUp}
					onMouseMove={this.onMouseMove}
					transform={`translate(${MAR},${MAR})`}
				>
					<rect
						onMouseDown={this.onClick}
						className={style.bg}
						width={width}
						height={height}
						ref={d => (this.rect = d)}
					/>
					<g>
						{LANES_RANGE.map(k => (
							<Lane
								paused={this.props.paused}
								k={k}
								height={height}
								x={x}
								v={this.props.scale(k)}
								key={k}
							/>
						))}
					</g>
					{this.props.dots
						.slice(1, this.props.dots.length - 1)
						.map((d, i) => (
							<Dot
								key={d.id}
								k={d.k}
								v={d.v}
								id={d.id}
								x={x}
								y={y}
								onMouseDown={bind(this.selectDot, this, d.id)}
								onContextMenu={bind(this.deleteDot, this, d.id)}
							/>
						))}
					<path className={style.line} d={pathMaker(this.props.dots)} />
				</g>
			</svg>
		);
	}
}
