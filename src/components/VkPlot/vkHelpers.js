import { createReducer as CR } from "redux-create-reducer";
import { combineReducers } from "redux";
import { scaleLinear } from "d3-scale";
import { createSelector } from "reselect";
import map from "lodash/map";
import filter from "lodash/filter";
import uniqueId from "lodash/uniqueId";
import range from "lodash/range";
import moize from "moize";
import { line } from "d3-shape";
import { KJ, VF, K0, Q0, W } from "constants";

export const NUM_LANES = 10;
// export const LANES_RANGE = range(5, KJ, KJ / NUM_LANES);
export const TIME_UNIT = 200;
export const LANE_LENGTH = 200; //meters

export const getVk = createSelector([state => state.dots], dots =>
	scaleLinear().domain(dots.map(d => d.k)).range(dots.map(d => d.v))
);

export const getX = moize(width =>
	scaleLinear().domain([0, KJ]).range([0, width])
);
export const getY = moize(height =>
	scaleLinear().domain([0, VF * 1.1]).range([height, 0])
);
export const getY2 = moize(height =>
	scaleLinear().domain([0, LANE_LENGTH]).range([0, height * 1.2])
);
export const getPathMaker = moize((x, y) =>
	line().x(d => x(d.k)).y(d => y(d.v))
);

const dotsReduce = CR(
	[{ id: "a", k: 0, v: VF, q: 0 }, { id: "b", k: KJ, v: 0, q: 0 }],
	{
		deleteDot(dots, { id }) {
			return filter(dots, d => d.id !== id);
		},
		updateDot(dots, { id, k, v }) {
			return map(dots, (d, i) => {
				if (d.id !== id) return d;
				v = Math.max(Math.min(dots[i - 1].v, v), dots[i + 1].v);
				k = Math.min(dots[i + 1].k, Math.max(dots[i - 1].k, k));
				return { id: d.id, k, v, q: k * v };
			});
		},
		addDot(dots, { id, k, v }) {
			dots = dots.concat({ id, k, v, q: k * v }).sort((a, b) => a.k - b.k);
			for (var i = 0; i < dots.length; i++) {
				let d = dots[i];
				if (d.id == id) {
					v = Math.max(Math.min(dots[i - 1].v, v), dots[i + 1].v);
					k = Math.min(dots[i + 1].k, Math.max(dots[i - 1].k, k));
					dots[i] = { id: d.id, k, v, q: k * v };
				}
			}
			return dots;
		}
	}
);

const pausedReduce = CR(true, {
	pausePlay: paused => !paused
});

function makeCar(x) {
	return { id: uniqueId(), x };
}

const LANES_INITIAL = range(0, NUM_LANES).map(i => {
	return {
		k: 5+i / NUM_LANES * KJ,
		cars: []
	};
});

const lanesReduce = CR(LANES_INITIAL, {
	addCar(lanes, { index }) {
		return map(lanes, (lane, i) => {
			if (i !== index) return lane;
			let cars = lane.cars;
			let x = 0;
			return upo(lane, { cars: [makeCar(x), ...cars] });
		});
	},
	tick(lanes, { dt, vk }) {
		return map(lanes, ({ cars, k }) => {
			const v = vk(k);
			// const res = [];
			cars = map(cars, d => {
				return { id: d.id, x: d.x + dt * v };
			});
			return { cars, k };
		});
	}
});

export const reducer = combineReducers({
	lanes: lanesReduce,
	dots: dotsReduce,
	paused: pausedReduce
});

function upo(oldObject, newValues) {
	return Object.assign({}, oldObject, newValues);
}
