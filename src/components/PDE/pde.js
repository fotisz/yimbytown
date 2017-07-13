import React, { Component, PureComponent } from "react";
import { timer, interval, timeout } from "d3-timer";
import { KJ, VF, Q0 } from "constants";
import style from "./stylePde.scss";
import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { reducer, getXScale, TIME_UNIT } from "./pdeHelpers";
import map from "lodash/map";
import uniqueId from "lodash/uniqueId";
import thunk from "redux-thunk";

const ROAD_HEIGHT = 10, MAR = 0;
// const TIME_UNIT = 50;

function trans(x, y) {
	return `translate(${x},${y})`;
}

class Svg$ extends Component {
	componentWillUnmount() {
		window.removeEventListener("resize", this.resize);
	}

	resize = () => {
		this.props.dispatch({
			type: "resize",
			width: this.svg.clientWidth - 2 * MAR
		});
	};

	componentDidMount() {
		window.addEventListener("resize", this.resize);
		this.resize();
	}

	render() {
		let { width, height, cars, xScale } = this.props;
		let carHeight = ROAD_HEIGHT - 4;
		return (
			<svg ref={d => (this.svg = d)} className={style.svg} height={ROAD_HEIGHT}>
				<rect className={style.road} width={width} height={ROAD_HEIGHT} />
				{cars.map(({ id, x }) => (
					<rect
						width="8"
						x="-5"
						height={carHeight}
						className={style.car}
						key={id}
						transform={trans(xScale(x), 2)}
					/>
				))}
			</svg>
		);
	}
}

const Svg = connect(state => ({
	cars: state.cars,
	xScale: getXScale(state),
	width: state.width
}))(Svg$);

const Pde$ = ({ pausePlay, paused }) => (
	<div className={style.main}>
		<Svg />
		<div className={style.button} onClick={pausePlay}>
			{paused ? "PLAY" : "PAUSE"}
		</div>
	</div>
);

function startPlaying() {
	return (dispatch, getState) => {
		let last = 0;
		let ticker = timer(elapsed => {
			let dt = (elapsed - last) / TIME_UNIT;
			dispatch({ type: "tick", dt });
			last = elapsed;
			if (getState().paused) {
				ticker.stop();
			}
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
	({ paused }) => ({ paused }),
	dispatch => ({
		pausePlay() {
			dispatch(pausePlay());
		},
		add() {
			dispatch({ type: "add" });
		}
	})
)(Pde$);

const store = createStore(reducer, applyMiddleware(thunk));

export default () => (
	<Provider store={store}>
		<Pde />
	</Provider>
);
