import { createReducer as CR } from "redux-create-reducer";
import { combineReducers } from "redux";
import { scaleLinear } from "d3-scale";
import { createSelector } from "reselect";
import map from "lodash/map";
import uniqueId from "lodash/uniqueId";
import { KJ, VF, K0, W } from "constants";

const LANE_LENGTH = 400;
const BNECK = 300;
const TIME_UNIT = 100;
const VK = k => {
	if (k <= K0) return VF;
	if (k >= KJ) return 0;
	return W * (KJ - k);
};

const VK2 = k => {
	console.log(k);
	if (k <= K0) return VF / 3;
	if (k >= KJ) return 0;
	return W / 3 * (KJ - k);
};

//
export const getXScale = createSelector(
	({ width }) => width,
	width => scaleLinear().domain([0, LANE_LENGTH]).range([0, width])
);

const carsReduce = CR([], {
	tick(cars, { dt }) {
		let l = cars.length - 1;
		let res = [];
		return map(cars, ({ id, x, k }, i, z) => {
			k = i < l ? 1 / (z[i + 1].x - x) : k;
			let v = x < BNECK ? VK(k) : VK2(k);
			return { id, x: x + dt * v, k };
		}).filter(d => d.x < LANE_LENGTH);
	},
	add(cars) {
		let k = cars[0] ? 1 / cars[0].x : 0;
		return [{ id: uniqueId(), x: 0, k }, ...cars];
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
