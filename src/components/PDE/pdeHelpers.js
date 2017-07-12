import { createReducer as CR } from "redux-create-reducer";
import { combineReducers } from "redux";
import { scaleLinear } from "d3-scale";
import { createSelector } from "reselect";
import map from "lodash/map";
import uniqueId from "lodash/uniqueId";
import { KJ, VF,K0, W } from "constants";

const LANE_LENGTH = 400;
const TIME_UNIT = 100;
const VK = k => {
	if (k <= K0) return VF;
	else if (k >= K0) return 0;
	else return W * (KJ - k);
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
		return map(cars, ({ id, x }, i, k) => {
			let v = i < l ? VK(1 / (k[i + 1].x - x)) : VF;
			return { id, x: x + dt * v };
		}).filter(d => d.x < LANE_LENGTH);
	},
	add(cars) {
		return [{ id: uniqueId(), x: 0 }, ...cars];
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
