import React, { Component, PureComponent } from "react";
import { timer, interval } from "d3-timer";
import { KJ, VF, Q0 } from "constants";
import style from "./stylePde.scss";
import { Provider, connect } from "react-redux";
import { createStore } from "redux";
import { reducer, getXScale } from "./pdeHelpers";
import map from "lodash/map";
import uniqueId from "lodash/uniqueId";
const ROAD_HEIGHT = 10, MAR = 0;
const TIME_UNIT = 50;

function trans(x, y) {
	return `translate(${x},${y})`;
}

class Svg extends Component {
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
						width="10"
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

const SvgWrapped = connect(state => ({
	cars: state.cars,
	xScale: getXScale(state),
	width: state.width
}))(Svg);

class Pde extends Component {
	componentWillUnmount() {
		if (this.ticker) {
			this.stopTimer();
			this.ticker = this.adder = null;
		}
	}

	componentDidMount() {
		if (!this.props.paused) this.startTimer();
	}

	stopTimer() {
		if (this.ticker) {
			this.ticker.stop();
			this.adder.stop();
		}
	}

	componentWillUpdate({ paused }) {
		if (paused) this.stopTimer();
		else this.startTimer();
	}

	startTimer() {
		let last = 0;
		this.ticker = timer(elapsed => {
			let dt = (elapsed - last) / TIME_UNIT;
			this.props.tick(dt);
			last = elapsed;
		});
		let a = 3600 / Q0 * TIME_UNIT;
		this.adder = interval(() => {
			this.props.add();
		}, a);
	}

	render() {
		return (
			<div className={style.main}>
				<SvgWrapped />
				<div className={style.button} onClick={this.props.pausePlay}>
					{this.props.paused ? "PLAY" : "PAUSE"}
				</div>
			</div>
		);
	}
}

const PdeWrapped = connect(
	({ paused }) => ({ paused }),
	dispatch => ({
		pausePlay() {
			dispatch({ type: "pausePlay" });
		},
		tick(dt) {
			dispatch({ type: "tick", dt });
		},
		add() {
			dispatch({ type: "add" });
		}
	})
)(Pde);

const store = createStore(reducer);

export default () => (
	<Provider store={store}>
		<PdeWrapped />
	</Provider>
);
