import { createReducer as CR } from "redux-create-reducer";
import { combineReducers } from "redux";
import { scaleLinear } from "d3-scale";
import { createSelector } from "reselect";
import map from "lodash/map";
import uniqueId from "lodash/uniqueId";
import { KJ, VF, K0, Q0, W } from "constants";

const LANE_LENGTH = 800;
const BNECK = LANE_LENGTH * 0.75;
const TIME_UNIT = 50;

const QK = k => {
	if (k <= K0) return k * VF;
	if (k < KJ) return Q0 - W * (k - K0);
	return 0;
};
//
// const QK2 = k => QK(k / 2);

const VS = s => QK(1000 / s) * s / 3600; //m/s

const VS2 = s => VS(s) / 2;

export const getXScale = createSelector(
	({ width }) => width * 1,
	width => scaleLinear().domain([0, LANE_LENGTH]).range([0, width])
);

function makeCar(x, v) {
	return { id: uniqueId(), x, v };
}

// const CARS_INITIAL

const carsReduce = CR([makeCar(50, VF), makeCar(100, VF)], {
	tick(cars, { dt }) {
		let l = cars.length - 1;
		return map(cars, ({ id, x }, i, z) => {
			let vs = x < BNECK ? VS : VS2;
			let space = i < l ? z[i + 1].x - x : x - z[i - 1].x;
			let v = vs(space);
			return { id, x: x + dt * v, v };
		}).filter(d => d.x < LANE_LENGTH * 1.2);
	},
	add(cars) {
		if (cars[0] && cars[0].x < 1000 / KJ) return cars;
		let s = cars[0] ? cars[0].x : 1e5;
		let v = VS(s);
		return [makeCar(0, v), ...cars];
	}
});

const pausedReduce = CR(true, {
	pausePlay(paused) {
		return !paused;
	}
});

const widthReduce = CR(500, {
	resize: (_, { width }) => width
});

export const reducer = combineReducers({
	cars: carsReduce,
	paused: pausedReduce,
	width: widthReduce
});

function upo(oldObject, newValues) {
	return Object.assign({}, oldObject, newValues);
}
