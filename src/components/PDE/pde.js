import React, { Component, PureComponent } from "react";
import { timer, interval, timeout } from "d3-timer";
import { KJ, VF, Q0 } from "constants";
import style from "./stylePde.scss";
import shared from "src/styleShared.scss";
import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import {
	reducer,
	TIME_UNIT,
	WIDTH,
	colorScale,
	xScale,
	HEIGHT,
	CANVAS_HEIGHT
} from "./pdeHelpers";
import map from "lodash/map";
import uniqueId from "lodash/uniqueId";
import thunk from "redux-thunk";

const ROAD_HEIGHT = 20, MAR = 0;

function trans(x, y) {
	return `translate(${x},${y})`;
}
let J = 0;

class Canvas extends Component {
	componentDidMount() {
		this.ctx = this.canvas.getContext("2d");
	}
	componentDidUpdate() {
		let { cars } = this.props;
		J += 0.4;
		cars.forEach((d, i) => {
			if (i == 0 || i == cars.length - 1) return;
			let x = xScale((d.x + cars[i - 1].x) / 2);
			let gap = (cars[i + 1].x - cars[i - 1].x) / 2;
			let w = xScale(gap);
			this.ctx.fillStyle = colorScale(gap);
			this.ctx.fillRect(x, CANVAS_HEIGHT - J, w, .5);
		});
	}
	render() {
		return (
			<div
				style={{
					transform: `translateY(${J - CANVAS_HEIGHT}px)`,
					position: "relative"
				}}
			>
				<canvas
					className={style.canvas}
					width={WIDTH}
					height={CANVAS_HEIGHT}
					ref={d => (this.canvas = d)}
				/>
			</div>
		);
	}
}

class Svg$ extends Component {
	render() {
		let { cars } = this.props;
		let carHeight = ROAD_HEIGHT - 6;
		return (
			<div>
				<svg
					ref={d => (this.svg = d)}
					className={style.svg}
					height={ROAD_HEIGHT}
					width={WIDTH}
				>
					<rect className={style.road} height={ROAD_HEIGHT} width={WIDTH} />
					{cars.map(({ id, x }) => (
						<rect
							width="3"
							x="-1.25"
							height={carHeight}
							className={style.car}
							key={id}
							transform={trans(xScale(x), 2)}
						/>
					))}
				</svg>
				<div style={{ overflowY: "scroll", height: "400px" }}>
					<Canvas cars={cars} />
				</div>
			</div>
		);
	}
}

const Svg = connect(state => ({
	cars: state.cars
}))(Svg$);

const Pde$ = ({ pausePlay, toggleBneck, paused, bneckEnabled }) => (
	<div className={style.plot}>
		<div style={{ display: "flex", flexDirection: "column" }}>
			<div className={style.buttonRow}>
				<div className={shared.button} onClick={pausePlay}>
					{paused ? "PLAY" : "PAUSE"}
				</div>
				<div className={shared.button} onClick={toggleBneck}>
					{bneckEnabled ? "DISABLE BOTTLENECK" : "ENABLE BOTTLENECK"}
				</div>
			</div>
			<Svg />
		</div>
	</div>
);

function startPlaying() {
	return (dispatch, getState) => {
		let last = 0;
		let ticker = timer(elapsed => {
			let dt = (elapsed - last) / TIME_UNIT;
			let state = getState();
			if (state.paused) {
				return ticker.stop();
			}
			dispatch({ type: "tick", dt, bneckEnabled: state.bneckEnabled });
			last = elapsed;
		});
		let adder = interval(() => {
			dispatch({ type: "add" });
			if (getState().paused) {
				adder.stop();
			}
		}, 3600 / Q0 * TIME_UNIT);
	};
}

function pausePlay() {
	return (dispatch, getState) => {
		dispatch({ type: "pausePlay" });
		timeout(() => {
			if (!getState().paused) {
				dispatch(startPlaying());
			}
		});
	};
}

const Pde = connect(
	({ paused, bneckEnabled }) => ({ paused, bneckEnabled }),
	dispatch => ({
		pausePlay() {
			dispatch(pausePlay());
		},
		toggleBneck() {
			dispatch({ type: "toggleBneck" });
		}
	})
)(Pde$);

const store = createStore(reducer, applyMiddleware(thunk));

export default () => (
	<Provider store={store}>
		<Pde />
	</Provider>
);
