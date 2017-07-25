import { createReducer as CR } from "redux-create-reducer";
import { combineReducers } from "redux";
import { scaleLinear, scaleSqrt } from "d3-scale";
import { createSelector } from "reselect";
import map from "lodash/map";
import uniqueId from "lodash/uniqueId";
import { KJ, VF, K0, Q0, W } from "constants";
import range from "lodash/range";
import { interpolateHcl, interpolateHslLong } from "d3-interpolate";
import colors from "material-colors";
export const CANVAS_HEIGHT = 1e4;
const LANE_LENGTH = 4000;
export const WIDTH = 1200;
// export const HEIGHT = 900;
const B0 = LANE_LENGTH * 0.5;
const B1 = LANE_LENGTH * 0.7;
export const TIME_UNIT = 30;
export const colorScale = scaleLinear()
	.domain([1000 / KJ - 4, 1000 / K0 + 40])
	.interpolate(interpolateHslLong)
	.range([colors.deepPurple["a700"], colors.yellow["a200"]])
	.clamp(true);

const QK = k => {
	if (k <= K0) return k * VF;
	if (k < KJ) return Q0 - W * (k - K0);
	return 0;
};

const VS = s => QK(1000 / s) * s / 3600; //m/s

export const xScale = scaleLinear().domain([0, LANE_LENGTH]).range([0, WIDTH]);

function makeCar(x, v) {
	return { id: uniqueId(), x, v };
}

const carsReduce = CR(range(0, 150).map(d => makeCar(d * 1000 / K0, VF)), {
	tick(cars, { dt, bneckEnabled }) {
		let l = cars.length - 1;
		let res = [];

		for (var i = 0; i <= l; i++) {
			let { x, id } = cars[i];
			let space = i < l ? cars[i + 1].x - x : x - cars[i - 1].x;
			let v = !bneckEnabled || x < B0 || x > B1 ? VS(space) : VS(space) / 2.5;
			if (x <= LANE_LENGTH) res.push({ id, x: x + dt * v });
		}
		return res;
	},
	add(cars) {
		if (cars[0] && cars[0].x < 1000 / KJ) return cars;
		let s = cars[0].x;
		let v = VS(s);
		return [makeCar(0, v), ...cars];
	}
});

const bneckEnabledReduce = CR(false, {
	toggleBneck(enabled) {
		return !enabled;
	}
});

const pausedReduce = CR(true, {
	pausePlay(paused) {
		return !paused;
	}
});

export const reducer = combineReducers({
	cars: carsReduce,
	paused: pausedReduce,
	bneckEnabled: bneckEnabledReduce
});

function upo(oldObject, newValues) {
	return Object.assign({}, oldObject, newValues);
}
