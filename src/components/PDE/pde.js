import React, { Component, PureComponent } from "react";
import { timer, interval } from "d3-timer";
import { KJ, VF } from "constants";
import style from "./stylePde.scss";
import { Provider, connect } from "react-redux";
import { createStore } from "redux";
import { reducer, getXScale } from "./pdeHelpers";
import map from "lodash/map";
import uniqueId from "lodash/uniqueId";
const ROAD_HEIGHT = 20, MAR = 10;
const Q0 = 0.5;
const TIME_UNIT = 100;

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
		return (
			<svg ref={d => (this.svg = d)} className={style.svg} height={ROAD_HEIGHT}>
				<rect className={style.road} width={width} height={ROAD_HEIGHT} />
				{cars.map(({ id, x }) => (
					<rect
						width="3"
						// y="2"
						height={ROAD_HEIGHT - 4}
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
		this.adder = interval(() => {
			this.props.add();
		}, 100);
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
