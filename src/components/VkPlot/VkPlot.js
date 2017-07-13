//@flow
import React, { Component, PureComponent } from "react";
import style from "./styleVkPlot.scss";
import shared from "src/styleShared.scss";
import { pure } from "recompose";
import { scaleLinear } from "d3-scale";
// import QkPlot from "components/QkPlot";
import { timer, interval, timeout } from "d3-timer";
import { KJ, VF, Q0 } from "constants";
import uniqueId from "lodash/uniqueId";
import range from "lodash/range";
import moize from "moize";
import type { DotDatum } from "src/types";
import { axisLeft, axisBottom, axisTop } from "d3-axis";
import { select } from "d3-selection";
import bind from "memoize-bind";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { connect, Provider } from "react-redux";
import {
	reducer,
	getX,
	getPathMaker,
	getY,
	getVk,
	getY2,
	TIME_UNIT
} from "./vkHelpers";
const MAR = 40;

const store = createStore(reducer, applyMiddleware(thunk));

const Lane = pure(({ height, k, x, cars }) => {
	let y = getY2(height);
	return (
		<g className={style.lane} transform={`translate(${x(k)},0)`}>
			<rect className={style.road} height={height} width="8" />
			{cars.map(d => (
				<rect
					key={d.id}
					x="2"
					y="-8"
					width="4"
					height="8"
					className={style.car}
					transform={`translate(0,${y(d.x)})`}
				/>
			))}
		</g>
	);
});

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

class Svg$ extends Component {
	state = {
		width: 500,
		height: 500
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

	deleteDot = (id: string, e: MouseEvent) => {
		e.preventDefault(), this.props.dispatch({ type: "deleteDot", id });
	};

	selectDot = (id: string) => {
		this.isDragging = true;
		this.selected = id;
	};

	onMouseUp = () => {
		this.isDragging = false;
	};

	onClick = (e: MouseEvent) => {
		let { k, v } = this.getKV(e);
		this.isDragging = true;
		this.selected = uniqueId();
		this.props.dispatch({ type: "addDot", id: this.selected, k, v });
	};

	onMouseMove = (e: MouseEvent) => {
		if (!this.isDragging) return;
		let { k, v } = this.getKV(e);
		this.props.dispatch({ type: "updateDot", id: this.selected, k, v });
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
						{this.props.lanes.map(lane => (
							<Lane
								k={lane.k}
								height={height}
								x={x}
								cars={lane.cars}
								key={lane.k}
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

const Svg = connect(state => ({
	dots: state.dots,
	lanes: state.lanes
}))(Svg$);

class $VkPlot extends Component {
	toggle = () => {
		this.props.pausePlay();
		if (this.props.paused) {
			this.props.startPlaying();
		}
	};

	render() {
		return (
			<div className={style.main}>
				<div className={style.plot}>
					<Svg />
				</div>
				<div style={{ textAlign: "center" }}>
					<div className={shared.button} onClick={this.toggle}>TOGGLE</div>
				</div>
			</div>
		);
	}
}

function startLaneAdding(index) {
	return (dispatch, getState) => {
		function hello() {
			let state = getState();
			let k = state.lanes[index].k;
			let q = getVk(state)(k) * k / 1000;
			timeout(() => {
				dispatch({ type: "addCar", index });
				if (!getState().paused) hello();
			}, TIME_UNIT / q);
		}
		hello();
	};
}

function startPlaying() {
	return (dispatch, getState) => {
		let last = 0;
		let ticker = timer(elapsed => {
			let dt = (elapsed - last) / TIME_UNIT;
			let vk = getVk(getState());
			dispatch({ type: "tick", dt, vk });
			last = elapsed;
			if (getState().paused) {
				ticker.stop();
			}
		});
		for (var i = 0; i < getState().lanes.length; i++) {
			dispatch(startLaneAdding(i));
		}
	};
}

const VkPlot = connect(
	state => ({
		dots: state.dots,
		paused: state.paused
	}),
	dispatch => ({
		startPlaying() {
			dispatch(startPlaying());
		},
		pausePlay() {
			dispatch({ type: "pausePlay" });
		}
	})
)($VkPlot);

export default () => (
	<Provider store={store}>
		<VkPlot />
	</Provider>
);
