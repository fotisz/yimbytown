webpackJsonp([1],{

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__App_js__ = __webpack_require__(262);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__App_js__["a"]; });



/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_VkPlot__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_PDE__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_FI__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styleApp_scss__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styleApp_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__styleApp_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_src_styleShared_scss__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_src_styleShared_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_src_styleShared_scss__);








const Home = () => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
	"div",
	null,
	"Welcome to my talk!"
);

/* harmony default export */ __webpack_exports__["a"] = (() => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
	__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["a" /* HashRouter */],
	null,
	__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		"div",
		{ className: __WEBPACK_IMPORTED_MODULE_5__styleApp_scss__["app"] },
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			"div",
			{ className: __WEBPACK_IMPORTED_MODULE_5__styleApp_scss__["header"] },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Link */],
				{ to: "/" },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"div",
					{ className: __WEBPACK_IMPORTED_MODULE_6_src_styleShared_scss__["button"] },
					"Home"
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Link */],
				{ to: "/vk" },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"div",
					{ className: __WEBPACK_IMPORTED_MODULE_6_src_styleShared_scss__["button"] },
					"Speed-Density Plot"
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Link */],
				{ to: "/pde" },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"div",
					{ className: __WEBPACK_IMPORTED_MODULE_6_src_styleShared_scss__["button"] },
					"LWR"
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Link */],
				{ to: "/fi" },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"div",
					{ className: __WEBPACK_IMPORTED_MODULE_6_src_styleShared_scss__["button"] },
					"Fundamental Identity"
				)
			)
		),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			"div",
			{ className: __WEBPACK_IMPORTED_MODULE_5__styleApp_scss__["content"] },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["c" /* Route */], { exact: true, path: "/", component: Home }),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["c" /* Route */], { path: "/vk", component: __WEBPACK_IMPORTED_MODULE_2_components_VkPlot__["a" /* default */] }),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["c" /* Route */], { path: "/pde", component: __WEBPACK_IMPORTED_MODULE_3_components_PDE__["a" /* default */] }),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["c" /* Route */], { path: "/fi", component: __WEBPACK_IMPORTED_MODULE_4_components_FI__["a" /* default */] })
		)
	)
));

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styleFI_scss__ = __webpack_require__(651);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styleFI_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styleFI_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_src_styleShared_scss__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_src_styleShared_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_src_styleShared_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_recompose__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3_scale__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_uniqueId__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_uniqueId___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash_uniqueId__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_d3_timer__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_range__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_range___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash_range__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_map__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_constants__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_d3_selection__ = __webpack_require__(168);












const WIDTH = 1200;
const ROAD_WIDTH = 1200;
const POOL_WIDTH = 300;
const HEIGHT = 20;
const KM = 100;
const ROAD_HEIGHT = 50;
const TIME_UNIT = 50;
// const
const LANE_LENGTH = 1200;
const QK = k => {
	if (k <= __WEBPACK_IMPORTED_MODULE_9_constants__["a" /* K0 */]) return k * __WEBPACK_IMPORTED_MODULE_9_constants__["b" /* VF */];
	if (k < __WEBPACK_IMPORTED_MODULE_9_constants__["c" /* KJ */]) return __WEBPACK_IMPORTED_MODULE_9_constants__["d" /* Q0 */] - __WEBPACK_IMPORTED_MODULE_9_constants__["e" /* W */] * (k - __WEBPACK_IMPORTED_MODULE_9_constants__["a" /* K0 */]);
	return 0;
};

const VS = s => QK(1000 / s) * s / 3600; //m/s

const xScale = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_d3_scale__["a" /* scaleLinear */])().domain([0, LANE_LENGTH]).range([0, ROAD_WIDTH]);

const Road = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_recompose__["a" /* pure */])(({ cars }) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
	"g",
	null,
	__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("rect", { className: __WEBPACK_IMPORTED_MODULE_1__styleFI_scss___default.a.lane, width: ROAD_WIDTH, height: ROAD_HEIGHT }),
	__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		"g",
		null,
		__WEBPACK_IMPORTED_MODULE_8_lodash_map___default()(cars, d => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("rect", {
			width: "3",
			height: ROAD_HEIGHT - 4,
			x: "-4",
			y: "2",
			key: d.id,
			className: __WEBPACK_IMPORTED_MODULE_1__styleFI_scss___default.a.car,
			transform: `translate(${xScale(d.x)},0)`
		}))
	)
));

const Pool = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_recompose__["a" /* pure */])(({ poolSize }) => {
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		"g",
		{ transform: `translate(${ROAD_WIDTH},0)` },
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("rect", { className: __WEBPACK_IMPORTED_MODULE_1__styleFI_scss___default.a.pool, width: POOL_WIDTH, height: ROAD_HEIGHT }),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			"g",
			null,
			__WEBPACK_IMPORTED_MODULE_7_lodash_range___default()(0, poolSize).map(d => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("rect", {
				x: d * 8,
				y: "2",
				className: __WEBPACK_IMPORTED_MODULE_1__styleFI_scss___default.a.carExited,
				width: "3",
				height: ROAD_HEIGHT - 4,
				key: d
			}))
		)
	);
});

class FI extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
	constructor(props) {
		super(props);

		_initialiseProps.call(this);

		let k = 8;
		let cars = createCars(k);
		this.state = {
			k,
			cars,
			poolSize: 0
		};
	}

	render() {
		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			"div",
			{ className: __WEBPACK_IMPORTED_MODULE_1__styleFI_scss___default.a.main },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"div",
				{ className: __WEBPACK_IMPORTED_MODULE_1__styleFI_scss___default.a.row },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"div",
					null,
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"div",
						null,
						"Density (veh/km)"
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
						type: "range",
						onChange: this.onChange,
						value: this.state.k,
						min: "0",
						step: "0.5",
						max: __WEBPACK_IMPORTED_MODULE_9_constants__["c" /* KJ */]
					})
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"div",
					{ className: __WEBPACK_IMPORTED_MODULE_2_src_styleShared_scss___default.a.button, onClick: this.pausePlay },
					this.state.paused ? "PLAY" : "PAUSE"
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"svg",
				{ width: ROAD_WIDTH + POOL_WIDTH, height: ROAD_HEIGHT },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Road, { cars: this.state.cars }),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Pool, { poolSize: this.state.poolSize })
			)
		);
	}
}

var _initialiseProps = function () {
	this.timer = null;

	this.startTimer = () => {
		let last = 0;
		let z = 0;
		this.timer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_d3_timer__["a" /* timer */])(elapsed => {
			const δ = (elapsed - last) / TIME_UNIT;
			last = elapsed;
			let v = VS(1000 / this.state.k);
			let cars = this.state.cars.filter(d => d.x < LANE_LENGTH);
			this.setState(({ cars, poolSize }) => {
				cars = __WEBPACK_IMPORTED_MODULE_8_lodash_map___default()(cars, d => {
					let newX = d.x + δ * v;

					if (newX > LANE_LENGTH) {
						newX -= LANE_LENGTH;
						poolSize = poolSize + 1;
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_d3_timer__["b" /* timeout */])(() => {
							this.setState(({ poolSize }) => ({
								poolSize: Math.max(poolSize - 1, 0)
							}));
						}, 3000);
					}
					return {
						id: d.id,
						x: (d.x + δ * v) % LANE_LENGTH
					};
				});

				return {
					cars,
					poolSize
				};
			});
		});
	};

	this.pausePlay = () => {
		if (this.timer) {
			this.timer.stop();
			this.timer = null;
		} else {
			this.startTimer();
		}
	};

	this.onChange = e => {
		let k = +e.target.value;
		this.setState({
			k,
			cars: createCars(k)
		});
	};
};

function createCars(k) {
	// let space = 1000 / k;
	let numCars = Math.floor(LANE_LENGTH / 1000 * k);
	return __WEBPACK_IMPORTED_MODULE_7_lodash_range___default()(0, LANE_LENGTH / 1000 * k).map(d => ({
		id: __WEBPACK_IMPORTED_MODULE_5_lodash_uniqueId___default()(),
		x: d * LANE_LENGTH / numCars
	}));
}

const App = () => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(FI, null);

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FI__ = __webpack_require__(263);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__FI__["a"]; });



/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pde__ = __webpack_require__(266);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__pde__["a"]; });



/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_timer__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_constants__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stylePde_scss__ = __webpack_require__(652);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stylePde_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__stylePde_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_src_styleShared_scss__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_src_styleShared_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_src_styleShared_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_redux__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pdeHelpers__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_map__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_uniqueId__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_uniqueId___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash_uniqueId__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_redux_thunk__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_redux_thunk__);












const ROAD_HEIGHT = 40,
      MAR = 0;

function trans(x, y) {
	return `translate(${x},${y})`;
}
let J = 0;

class Canvas extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
	componentDidMount() {
		this.ctx = this.canvas.getContext("2d");
	}
	componentDidUpdate() {
		let { cars } = this.props;
		J += 0.4;
		cars.forEach((d, i) => {
			if (i == 0 || i == cars.length - 1) return;
			let x = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__pdeHelpers__["a" /* xScale */])((d.x + cars[i - 1].x) / 2);
			let gap = (cars[i + 1].x - cars[i - 1].x) / 2;
			let w = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__pdeHelpers__["a" /* xScale */])(gap);
			this.ctx.fillStyle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__pdeHelpers__["b" /* colorScale */])(gap);
			this.ctx.fillRect(x, __WEBPACK_IMPORTED_MODULE_7__pdeHelpers__["c" /* CANVAS_HEIGHT */] - J, w, .5);
		});
	}
	render() {
		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			"div",
			{
				style: {
					transform: `translateY(${J - __WEBPACK_IMPORTED_MODULE_7__pdeHelpers__["c" /* CANVAS_HEIGHT */]}px)`,
					position: "relative"
				}
			},
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("canvas", {
				className: __WEBPACK_IMPORTED_MODULE_3__stylePde_scss___default.a.canvas,
				width: __WEBPACK_IMPORTED_MODULE_7__pdeHelpers__["d" /* WIDTH */],
				height: __WEBPACK_IMPORTED_MODULE_7__pdeHelpers__["c" /* CANVAS_HEIGHT */],
				ref: d => this.canvas = d
			})
		);
	}
}

class Svg$ extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
	render() {
		let { cars } = this.props;
		let carHeight = ROAD_HEIGHT - 6;
		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			"div",
			null,
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"svg",
				{
					ref: d => this.svg = d,
					className: __WEBPACK_IMPORTED_MODULE_3__stylePde_scss___default.a.svg,
					height: ROAD_HEIGHT,
					width: __WEBPACK_IMPORTED_MODULE_7__pdeHelpers__["d" /* WIDTH */]
				},
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("rect", { className: __WEBPACK_IMPORTED_MODULE_3__stylePde_scss___default.a.road, height: ROAD_HEIGHT, width: __WEBPACK_IMPORTED_MODULE_7__pdeHelpers__["d" /* WIDTH */] }),
				cars.map(({ id, x }) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("rect", {
					width: "3",
					x: "-1.25",
					height: carHeight,
					className: __WEBPACK_IMPORTED_MODULE_3__stylePde_scss___default.a.car,
					key: id,
					transform: trans(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__pdeHelpers__["a" /* xScale */])(x), 2)
				}))
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"div",
				{ style: { overflowY: "scroll", height: "400px" } },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Canvas, { cars: cars })
			)
		);
	}
}

const Svg = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_react_redux__["a" /* connect */])(state => ({
	cars: state.cars
}))(Svg$);

const Pde$ = ({ pausePlay, toggleBneck, paused, bneckEnabled }) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
	"div",
	{ className: __WEBPACK_IMPORTED_MODULE_3__stylePde_scss___default.a.plot },
	__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		"div",
		{ style: { display: "flex", flexDirection: "column" } },
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			"div",
			{ className: __WEBPACK_IMPORTED_MODULE_3__stylePde_scss___default.a.buttonRow },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"div",
				{ className: __WEBPACK_IMPORTED_MODULE_4_src_styleShared_scss___default.a.button, onClick: pausePlay },
				paused ? "PLAY" : "PAUSE"
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"div",
				{ className: __WEBPACK_IMPORTED_MODULE_4_src_styleShared_scss___default.a.button, onClick: toggleBneck },
				bneckEnabled ? "DISABLE BOTTLENECK" : "ENABLE BOTTLENECK"
			)
		),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Svg, null)
	)
);

function startPlaying() {
	return (dispatch, getState) => {
		let last = 0;
		let ticker = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_timer__["a" /* timer */])(elapsed => {
			let dt = (elapsed - last) / __WEBPACK_IMPORTED_MODULE_7__pdeHelpers__["e" /* TIME_UNIT */];
			let state = getState();
			if (state.paused) {
				return ticker.stop();
			}
			dispatch({ type: "tick", dt, bneckEnabled: state.bneckEnabled });
			last = elapsed;
		});
		let adder = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_timer__["c" /* interval */])(() => {
			dispatch({ type: "add" });
			if (getState().paused) {
				adder.stop();
			}
		}, 3600 / __WEBPACK_IMPORTED_MODULE_2_constants__["d" /* Q0 */] * __WEBPACK_IMPORTED_MODULE_7__pdeHelpers__["e" /* TIME_UNIT */]);
	};
}

function pausePlay() {
	return (dispatch, getState) => {
		dispatch({ type: "pausePlay" });
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_timer__["b" /* timeout */])(() => {
			if (!getState().paused) {
				dispatch(startPlaying());
			}
		});
	};
}

const Pde = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_react_redux__["a" /* connect */])(({ paused, bneckEnabled }) => ({ paused, bneckEnabled }), dispatch => ({
	pausePlay() {
		dispatch(pausePlay());
	},
	toggleBneck() {
		dispatch({ type: "toggleBneck" });
	}
}))(Pde$);

const store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_redux__["a" /* createStore */])(__WEBPACK_IMPORTED_MODULE_7__pdeHelpers__["f" /* reducer */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_redux__["b" /* applyMiddleware */])(__WEBPACK_IMPORTED_MODULE_10_redux_thunk___default.a));

/* harmony default export */ __webpack_exports__["a"] = (() => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
	__WEBPACK_IMPORTED_MODULE_5_react_redux__["b" /* Provider */],
	{ store: store },
	__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Pde, null)
));

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_create_reducer__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_create_reducer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_create_reducer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_scale__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reselect__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_reselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_map__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_uniqueId__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_uniqueId___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash_uniqueId__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_constants__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_range__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_range___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash_range__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_d3_interpolate__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_colors__ = __webpack_require__(532);










const CANVAS_HEIGHT = 1e4;
/* harmony export (immutable) */ __webpack_exports__["c"] = CANVAS_HEIGHT;

const LANE_LENGTH = 4000;
const WIDTH = 1200;
/* harmony export (immutable) */ __webpack_exports__["d"] = WIDTH;

// export const HEIGHT = 900;
const B0 = LANE_LENGTH * 0.5;
const B1 = LANE_LENGTH * 0.7;
const TIME_UNIT = 30;
/* harmony export (immutable) */ __webpack_exports__["e"] = TIME_UNIT;

const colorScale = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_scale__["a" /* scaleLinear */])().domain([1000 / __WEBPACK_IMPORTED_MODULE_6_constants__["c" /* KJ */] - 4, 1000 / __WEBPACK_IMPORTED_MODULE_6_constants__["a" /* K0 */] + 40]).interpolate(__WEBPACK_IMPORTED_MODULE_8_d3_interpolate__["e" /* interpolateHslLong */]).range([__WEBPACK_IMPORTED_MODULE_9_material_colors__["a" /* default */].deepPurple["a700"], __WEBPACK_IMPORTED_MODULE_9_material_colors__["a" /* default */].yellow["a200"]]).clamp(true);
/* harmony export (immutable) */ __webpack_exports__["b"] = colorScale;


const QK = k => {
	if (k <= __WEBPACK_IMPORTED_MODULE_6_constants__["a" /* K0 */]) return k * __WEBPACK_IMPORTED_MODULE_6_constants__["b" /* VF */];
	if (k < __WEBPACK_IMPORTED_MODULE_6_constants__["c" /* KJ */]) return __WEBPACK_IMPORTED_MODULE_6_constants__["d" /* Q0 */] - __WEBPACK_IMPORTED_MODULE_6_constants__["e" /* W */] * (k - __WEBPACK_IMPORTED_MODULE_6_constants__["a" /* K0 */]);
	return 0;
};

const VS = s => QK(1000 / s) * s / 3600; //m/s

const xScale = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_scale__["a" /* scaleLinear */])().domain([0, LANE_LENGTH]).range([0, WIDTH]);
/* harmony export (immutable) */ __webpack_exports__["a"] = xScale;


function makeCar(x, v) {
	return { id: __WEBPACK_IMPORTED_MODULE_5_lodash_uniqueId___default()(), x, v };
}

const carsReduce = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_create_reducer__["createReducer"])(__WEBPACK_IMPORTED_MODULE_7_lodash_range___default()(0, 150).map(d => makeCar(d * 1000 / __WEBPACK_IMPORTED_MODULE_6_constants__["a" /* K0 */], __WEBPACK_IMPORTED_MODULE_6_constants__["b" /* VF */])), {
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
		if (cars[0] && cars[0].x < 1000 / __WEBPACK_IMPORTED_MODULE_6_constants__["c" /* KJ */]) return cars;
		let s = cars[0].x;
		let v = VS(s);
		return [makeCar(0, v), ...cars];
	}
});

const bneckEnabledReduce = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_create_reducer__["createReducer"])(false, {
	toggleBneck(enabled) {
		return !enabled;
	}
});

const pausedReduce = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_create_reducer__["createReducer"])(true, {
	pausePlay(paused) {
		return !paused;
	}
});

const reducer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux__["d" /* combineReducers */])({
	cars: carsReduce,
	paused: pausedReduce,
	bneckEnabled: bneckEnabledReduce
});
/* harmony export (immutable) */ __webpack_exports__["f"] = reducer;


function upo(oldObject, newValues) {
	return Object.assign({}, oldObject, newValues);
}

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styleVkPlot_scss__ = __webpack_require__(653);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styleVkPlot_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styleVkPlot_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_src_styleShared_scss__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_src_styleShared_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_src_styleShared_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_recompose__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3_scale__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_d3_timer__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_constants__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_uniqueId__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_uniqueId___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash_uniqueId__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_range__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_range___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_range__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moize__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_moize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_d3_axis__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_d3_selection__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_memoize_bind__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_memoize_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_memoize_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_redux__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_redux_thunk__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_react_redux__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__vkHelpers__ = __webpack_require__(270);





// import QkPlot from "components/QkPlot";













const MAR = 55;

const store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13_redux__["a" /* createStore */])(__WEBPACK_IMPORTED_MODULE_16__vkHelpers__["a" /* reducer */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13_redux__["b" /* applyMiddleware */])(__WEBPACK_IMPORTED_MODULE_14_redux_thunk___default.a));

const Lane = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_recompose__["a" /* pure */])(({ height, k, x, cars }) => {
	let y = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_16__vkHelpers__["b" /* getY2 */])(height);
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		"g",
		{ className: __WEBPACK_IMPORTED_MODULE_1__styleVkPlot_scss___default.a.lane, transform: `translate(${x(k)},0)` },
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("rect", { className: __WEBPACK_IMPORTED_MODULE_1__styleVkPlot_scss___default.a.road, height: height, width: "8" }),
		cars.map(d => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("rect", {
			key: d.id,
			x: "2",
			y: "-8",
			width: "4",
			height: "8",
			className: __WEBPACK_IMPORTED_MODULE_1__styleVkPlot_scss___default.a.car,
			transform: `translate(0,${y(d.x)})`
		}))
	);
});

const Lanes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_15_react_redux__["a" /* connect */])((state, props) => ({
	lanes: state.lanes,
	height: props.height,
	x: props.x
}))(({ lanes, height, x }) => {
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		"g",
		null,
		lanes.map(lane => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Lane, { k: lane.k, height: height, x: x, cars: lane.cars, key: lane.k }))
	);
});

const Dot = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_recompose__["a" /* pure */])(({ onMouseDown, onContextMenu, k, v, x, y }) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
	"g",
	{
		onMouseDown: onMouseDown,
		onContextMenu: onContextMenu,
		transform: `translate(${x(k)},${y(v)})`
	},
	__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("circle", { r: "13", className: __WEBPACK_IMPORTED_MODULE_1__styleVkPlot_scss___default.a.selector }),
	__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("circle", { r: "5", className: __WEBPACK_IMPORTED_MODULE_1__styleVkPlot_scss___default.a.dot })
));

class VkPlot$ extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
	constructor(...args) {
		var _temp;

		return _temp = super(...args), this.state = {
			width: 500,
			height: 500
		}, this.resize = () => {
			this.setState({
				width: this.svg.clientWidth - 2 * MAR,
				height: this.svg.clientHeight - 2 * MAR
			}, () => {
				let x = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_16__vkHelpers__["c" /* getX */])(this.state.width);
				let y = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_16__vkHelpers__["d" /* getY */])(this.state.height);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_d3_selection__["a" /* select */])(this.gTop).call(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_d3_axis__["a" /* axisBottom */])().scale(x));
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_d3_selection__["a" /* select */])(this.gLeft).call(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_d3_axis__["b" /* axisLeft */])().scale(y));
			});
		}, this.deleteDot = (id, e) => {
			e.preventDefault(), this.props.dispatch({ type: "deleteDot", id });
		}, this.selectDot = id => {
			this.isDragging = true;
			this.selected = id;
		}, this.onMouseUp = () => {
			this.isDragging = false;
		}, this.onClick = e => {
			let { k, v } = this.getKV(e);
			this.isDragging = true;
			this.selected = __WEBPACK_IMPORTED_MODULE_7_lodash_uniqueId___default()();
			this.props.dispatch({ type: "addDot", id: this.selected, k, v });
		}, this.onMouseMove = e => {
			if (!this.isDragging) return;
			let { k, v } = this.getKV(e);
			this.props.dispatch({ type: "updateDot", id: this.selected, k, v });
		}, this.getKV = e => {
			let { left, top } = this.rect.getBoundingClientRect();
			let x = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_16__vkHelpers__["c" /* getX */])(this.state.width);
			let y = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_16__vkHelpers__["d" /* getY */])(this.state.height);
			return {
				k: x.invert(e.clientX - left),
				v: y.invert(e.clientY - top)
			};
		}, _temp;
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.resize);
	}

	componentDidMount() {
		window.addEventListener("resize", this.resize);
		this.resize();
	}

	render() {
		const { width, height } = this.state;
		const x = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_16__vkHelpers__["c" /* getX */])(width);
		const y = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_16__vkHelpers__["d" /* getY */])(height);
		const pathMaker = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_16__vkHelpers__["e" /* getPathMaker */])(x, y);
		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			"div",
			null,
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"svg",
				{ ref: d => this.svg = d, className: __WEBPACK_IMPORTED_MODULE_1__styleVkPlot_scss___default.a.svg },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"defs",
					null,
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"clipPath",
						{ id: "hello" },
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("rect", { width: width, height: height })
					)
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"g",
					{ transform: `translate(${MAR},${MAR})` },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"g",
						{ ref: d => this.gTop = d, transform: `translate(0,${height})` },
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							"g",
							{ transform: `translate(${width / 2},35)` },
							__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
								"text",
								{ className: __WEBPACK_IMPORTED_MODULE_1__styleVkPlot_scss___default.a.axisLabel },
								"density (veh/km)"
							)
						)
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"g",
						{ ref: d => this.gLeft = d },
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							"g",
							{ transform: `translate(-40,${height / 2}) rotate(-90)` },
							__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
								"text",
								{ className: __WEBPACK_IMPORTED_MODULE_1__styleVkPlot_scss___default.a.axisLabel },
								"speed (km/hr)"
							)
						)
					)
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"g",
					{
						clipPath: "url(#hello)",
						onMouseUp: this.onMouseUp,
						onMouseMove: this.onMouseMove,
						transform: `translate(${MAR},${MAR})`
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("rect", {
						onMouseDown: this.onClick,
						className: __WEBPACK_IMPORTED_MODULE_1__styleVkPlot_scss___default.a.bg,
						width: width,
						height: height,
						ref: d => this.rect = d
					}),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Lanes, { x: x, height: height }),
					this.props.dots.slice(1, this.props.dots.length - 1).map((d, i) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Dot, {
						key: d.id,
						k: d.k,
						v: d.v,
						id: d.id,
						x: x,
						y: y,
						onMouseDown: __WEBPACK_IMPORTED_MODULE_12_memoize_bind___default()(this.selectDot, this, d.id),
						onContextMenu: __WEBPACK_IMPORTED_MODULE_12_memoize_bind___default()(this.deleteDot, this, d.id)
					})),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { className: __WEBPACK_IMPORTED_MODULE_1__styleVkPlot_scss___default.a.line, d: pathMaker(this.props.dots) })
				)
			)
		);
	}
}

const VkPlot = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_15_react_redux__["a" /* connect */])(state => ({
	dots: state.dots,
	lanes: state.lanes
}))(VkPlot$);

const Path = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_recompose__["a" /* pure */])(({ vk, pathMaker }) => {
	let n = 100;
	let points = __WEBPACK_IMPORTED_MODULE_8_lodash_range___default()(0, __WEBPACK_IMPORTED_MODULE_6_constants__["c" /* KJ */], __WEBPACK_IMPORTED_MODULE_6_constants__["c" /* KJ */] / n).map(k => ({
		k,
		q: vk(k) * k
	}));
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: pathMaker(points), className: __WEBPACK_IMPORTED_MODULE_1__styleVkPlot_scss___default.a.line });
});

class QkPlot$ extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
	constructor(...args) {
		var _temp2;

		return _temp2 = super(...args), this.state = {
			width: 500,
			height: 500
		}, this.resize = () => {
			this.setState({
				width: this.svg.clientWidth - 2 * MAR,
				height: this.svg.clientHeight - 2 * MAR
			}, () => {
				let x = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_16__vkHelpers__["c" /* getX */])(this.state.width);
				let y = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_16__vkHelpers__["f" /* getY3 */])(this.state.height);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_d3_selection__["a" /* select */])(this.gTop).call(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_d3_axis__["a" /* axisBottom */])().scale(x));
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_d3_selection__["a" /* select */])(this.gLeft).call(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_d3_axis__["b" /* axisLeft */])().scale(y));
			});
		}, _temp2;
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.resize);
	}

	componentDidMount() {
		window.addEventListener("resize", this.resize);
		this.resize();
	}

	render() {
		const { width, height } = this.state;
		const x = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_16__vkHelpers__["c" /* getX */])(width);
		const y = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_16__vkHelpers__["f" /* getY3 */])(height);
		const pathMaker = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_16__vkHelpers__["g" /* getPathMaker2 */])(x, y);
		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			"div",
			null,
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"svg",
				{ ref: d => this.svg = d, className: __WEBPACK_IMPORTED_MODULE_1__styleVkPlot_scss___default.a.svg },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"g",
					{ transform: `translate(${MAR},${MAR})` },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"g",
						{ ref: d => this.gTop = d, transform: `translate(0,${height})` },
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							"g",
							{ transform: `translate(${width / 2},35)` },
							__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
								"text",
								{ className: __WEBPACK_IMPORTED_MODULE_1__styleVkPlot_scss___default.a.axisLabel },
								"density (veh/km)"
							)
						)
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"g",
						{ ref: d => this.gLeft = d },
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							"g",
							{ transform: `translate(-48,${height / 2}) rotate(-90)` },
							__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
								"text",
								{ className: __WEBPACK_IMPORTED_MODULE_1__styleVkPlot_scss___default.a.axisLabel },
								"flow (veh/hr)"
							)
						)
					)
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"g",
					{ transform: `translate(${MAR},${MAR})` },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("rect", { className: __WEBPACK_IMPORTED_MODULE_1__styleVkPlot_scss___default.a.bg, width: width, height: height }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Path, { vk: this.props.vk, pathMaker: pathMaker })
				)
			)
		);
	}
}

const QkPlot = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_15_react_redux__["a" /* connect */])(state => ({
	dots: state.dots,
	vk: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_16__vkHelpers__["h" /* getVk */])(state)
}))(QkPlot$);

const $Plots = ({ pausePlay }) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
	"div",
	{ className: __WEBPACK_IMPORTED_MODULE_1__styleVkPlot_scss___default.a.main },
	__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		"div",
		{ className: __WEBPACK_IMPORTED_MODULE_1__styleVkPlot_scss___default.a.plots },
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(VkPlot, null),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(QkPlot, null)
	),
	__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		"div",
		{ style: { textAlign: "center" } },
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			"div",
			{ className: __WEBPACK_IMPORTED_MODULE_2_src_styleShared_scss___default.a.button, onClick: pausePlay },
			"TOGGLE"
		)
	)
);

function startPlaying() {
	return (dispatch, getState) => {
		let last = 0;
		let ticker = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_d3_timer__["a" /* timer */])(elapsed => {
			let dt = (elapsed - last) / __WEBPACK_IMPORTED_MODULE_16__vkHelpers__["i" /* TIME_UNIT */];
			let vk = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_16__vkHelpers__["h" /* getVk */])(getState());
			dispatch({ type: "tick", dt, vk });
			last = elapsed;
			if (getState().paused) {
				ticker.stop();
			}
		});
	};
}

function pausePlay() {
	return (dispatch, getState) => {
		dispatch({ type: "pausePlay" });
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_d3_timer__["b" /* timeout */])(() => {
			if (!getState().paused) {
				dispatch(startPlaying());
			}
		});
	};
}

const Plots = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_15_react_redux__["a" /* connect */])(null, dispatch => ({
	pausePlay() {
		dispatch(pausePlay());
	}
}))($Plots);

/* harmony default export */ __webpack_exports__["a"] = (() => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
	__WEBPACK_IMPORTED_MODULE_15_react_redux__["b" /* Provider */],
	{ store: store },
	__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Plots, null)
));

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VkPlot__ = __webpack_require__(268);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__VkPlot__["a"]; });



/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_create_reducer__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_create_reducer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_create_reducer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_scale__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reselect__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_reselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_map__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_filter__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_uniqueId__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_uniqueId___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash_uniqueId__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_range__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_range___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash_range__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moize__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_moize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_d3_shape__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_constants__ = __webpack_require__(33);












const NUM_LANES = 10;
/* unused harmony export NUM_LANES */

const TIME_UNIT = 200;
/* harmony export (immutable) */ __webpack_exports__["i"] = TIME_UNIT;

const LANE_LENGTH = 200;
/* unused harmony export LANE_LENGTH */
 //meters

const getVk = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_reselect__["createSelector"])([state => state.dots], dots => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_scale__["a" /* scaleLinear */])().domain(dots.map(d => d.k)).range(dots.map(d => d.v)));
/* harmony export (immutable) */ __webpack_exports__["h"] = getVk;


const getX = __WEBPACK_IMPORTED_MODULE_8_moize___default()(width => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_scale__["a" /* scaleLinear */])().domain([0, __WEBPACK_IMPORTED_MODULE_10_constants__["c" /* KJ */]]).range([0, width]));
/* harmony export (immutable) */ __webpack_exports__["c"] = getX;

const getY = __WEBPACK_IMPORTED_MODULE_8_moize___default()(height => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_scale__["a" /* scaleLinear */])().domain([0, __WEBPACK_IMPORTED_MODULE_10_constants__["b" /* VF */] * 1.1]).range([height, 0]));
/* harmony export (immutable) */ __webpack_exports__["d"] = getY;

const getY2 = __WEBPACK_IMPORTED_MODULE_8_moize___default()(height => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_scale__["a" /* scaleLinear */])().domain([0, LANE_LENGTH]).range([0, height * 1.2]));
/* harmony export (immutable) */ __webpack_exports__["b"] = getY2;

const getY3 = __WEBPACK_IMPORTED_MODULE_8_moize___default()(height => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_scale__["a" /* scaleLinear */])().domain([0, __WEBPACK_IMPORTED_MODULE_10_constants__["d" /* Q0 */] * 1.1]).range([height, 0]));
/* harmony export (immutable) */ __webpack_exports__["f"] = getY3;

const getPathMaker = __WEBPACK_IMPORTED_MODULE_8_moize___default()((x, y) => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_d3_shape__["a" /* line */])().x(d => x(d.k)).y(d => y(d.v)));
/* harmony export (immutable) */ __webpack_exports__["e"] = getPathMaker;


const getPathMaker2 = __WEBPACK_IMPORTED_MODULE_8_moize___default()((x, y) => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_d3_shape__["a" /* line */])().x(d => x(d.k)).y(d => y(d.q)));
/* harmony export (immutable) */ __webpack_exports__["g"] = getPathMaker2;


const dotsReduce = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_create_reducer__["createReducer"])([{ id: "a", k: 0, v: __WEBPACK_IMPORTED_MODULE_10_constants__["b" /* VF */], q: 0 }, { id: "b", k: __WEBPACK_IMPORTED_MODULE_10_constants__["c" /* KJ */], v: 0, q: 0 }], {
	deleteDot(dots, { id }) {
		return __WEBPACK_IMPORTED_MODULE_5_lodash_filter___default()(dots, d => d.id !== id);
	},
	updateDot(dots, { id, k, v }) {
		return __WEBPACK_IMPORTED_MODULE_4_lodash_map___default()(dots, (d, i) => {
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
});

const pausedReduce = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_create_reducer__["createReducer"])(true, {
	pausePlay: paused => !paused
});

function makeCar(x) {
	return { id: __WEBPACK_IMPORTED_MODULE_6_lodash_uniqueId___default()(), x };
}

const LANES_INITIAL = __WEBPACK_IMPORTED_MODULE_7_lodash_range___default()(0, NUM_LANES).map(i => {
	let k = 5 + i / NUM_LANES * __WEBPACK_IMPORTED_MODULE_10_constants__["c" /* KJ */];
	let numCars = Math.floor(k * LANE_LENGTH / 1000);
	let space = LANE_LENGTH / numCars;
	return {
		k,
		cars: __WEBPACK_IMPORTED_MODULE_7_lodash_range___default()(numCars).map(d => ({ id: __WEBPACK_IMPORTED_MODULE_6_lodash_uniqueId___default()(), x: d * space }))
	};
});

const lanesReduce = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_create_reducer__["createReducer"])(LANES_INITIAL, {
	tick(lanes, { dt, vk }) {
		return __WEBPACK_IMPORTED_MODULE_4_lodash_map___default()(lanes, ({ cars, k }) => {
			const v = vk(k);
			cars = __WEBPACK_IMPORTED_MODULE_4_lodash_map___default()(cars, ({ id, x }) => {
				return { id, x: (x + dt * v) % LANE_LENGTH };
			});
			return { cars, k };
		});
	}
});

const reducer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux__["d" /* combineReducers */])({
	lanes: lanesReduce,
	dots: dotsReduce,
	paused: pausedReduce
});
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;


function upo(oldObject, newValues) {
	return Object.assign({}, oldObject, newValues);
}

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const KJ = 120;
/* harmony export (immutable) */ __webpack_exports__["c"] = KJ;

const VF = 45;
/* harmony export (immutable) */ __webpack_exports__["b"] = VF;

const K0 = KJ / 4;
/* harmony export (immutable) */ __webpack_exports__["a"] = K0;

const Q0 = K0 * VF;
/* harmony export (immutable) */ __webpack_exports__["d"] = Q0;

const W = Q0 / (KJ - K0);
/* harmony export (immutable) */ __webpack_exports__["e"] = W;

console.log(Q0);

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_App__ = __webpack_require__(260);




__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_dom__["render"])(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_App__["a" /* default */], null), document.getElementById("root"));

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(34)(undefined);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Neuton|Work+Sans:400);", ""]);

// module
exports.push([module.i, "body {\n  background-color: #eeeeee; }\n\n.styleApp__app___1Qa5Q {\n  font-family: 'Work Sans', sans-serif;\n  margin: 0;\n  padding: 0; }\n  .styleApp__app___1Qa5Q a {\n    text-decoration: none; }\n  .styleApp__app___1Qa5Q text {\n    font-family: \"Work Sans\", sans-serif;\n    font-size: 14px; }\n\n.styleApp__header___YDqwz {\n  padding: 8px 0px;\n  width: 100%;\n  background-color: #0091ea;\n  color: white;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  display: flex; }\n\n.styleApp__header___YDqwz > * {\n  margin: 0px 10px; }\n\n.styleApp__content___127ZB {\n  margin-top: 60px;\n  padding: 15px; }\n", ""]);

// exports
exports.locals = {
	"app": "styleApp__app___1Qa5Q",
	"header": "styleApp__header___YDqwz",
	"content": "styleApp__content___127ZB"
};

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(34)(undefined);
// imports


// module
exports.push([module.i, "div.styleFI__main___1BcC8 {\n  display: inline-block;\n  background-color: white;\n  padding: 40px;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12); }\n\n.styleFI__car___2oCWN {\n  fill: #03a9f4;\n  rx: 1px;\n  ry: 1px; }\n\n.styleFI__row___35Zie {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  margin-bottom: 20px; }\n\n.styleFI__lane___2QtRt {\n  fill: #b0bec5;\n  opacity: .7;\n  pointer-events: none; }\n\n.styleFI__pool___26DqO {\n  fill: #e0e0e0;\n  pointer-events: none; }\n\n.styleFI__carExited___2kMc4 {\n  fill: #e91e63;\n  rx: 1px;\n  ry: 1px; }\n", ""]);

// exports
exports.locals = {
	"main": "styleFI__main___1BcC8",
	"car": "styleFI__car___2oCWN",
	"row": "styleFI__row___35Zie",
	"lane": "styleFI__lane___2QtRt",
	"pool": "styleFI__pool___26DqO",
	"carExited": "styleFI__carExited___2kMc4"
};

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(34)(undefined);
// imports


// module
exports.push([module.i, "div.stylePde__plot___8yRlm {\n  height: 800px;\n  background-color: white;\n  padding: 20px;\n  display: inline-block;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12); }\n\n.stylePde__bg___3Cdnl {\n  fill: #f5f5f5; }\n\n.stylePde__buttonRow___2B3vm {\n  margin-bottom: 10px;\n  display: flex; }\n\n.stylePde__car___gwQfz {\n  fill: #0288d1;\n  rx: 1px;\n  ry: 1px; }\n\n.stylePde__road___30qU4 {\n  fill: #cfd8dc;\n  opacity: .7;\n  pointer-events: none;\n  stroke: none; }\n\n.stylePde__button___xhhjU {\n  padding: 14px;\n  background-color: #f5f5f5;\n  width: auto;\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n  outline: none;\n  text-align: center; }\n", ""]);

// exports
exports.locals = {
	"plot": "stylePde__plot___8yRlm",
	"bg": "stylePde__bg___3Cdnl",
	"buttonRow": "stylePde__buttonRow___2B3vm",
	"car": "stylePde__car___gwQfz",
	"road": "stylePde__road___30qU4",
	"button": "stylePde__button___xhhjU"
};

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(34)(undefined);
// imports


// module
exports.push([module.i, "div.styleVkPlot__main___18K97 {\n  background-color: white;\n  padding: 30px;\n  box-sizing: border-box;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12); }\n\ndiv.styleVkPlot__plots___1Pibq {\n  height: 500px;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  position: relative; }\n\ndiv.styleVkPlot__plots___1Pibq > div {\n  flex: 1; }\n\n.styleVkPlot__bg___s483E {\n  fill: #f5f5f5; }\n\n.styleVkPlot__svg___39HJy {\n  width: 100%;\n  height: 100%; }\n\ncircle.styleVkPlot__dot___2R1oG {\n  fill: #ad1457;\n  pointer-events: none; }\n\ncircle.styleVkPlot__selector___1vCzB {\n  fill: #ffffff;\n  stroke: #ffffff;\n  opacity: .1;\n  transition: opacity .3s ease-in-out;\n  cursor: pointer; }\n\ncircle.styleVkPlot__selector___1vCzB:hover {\n  opacity: .9;\n  transition: opacity .3s ease-in-out; }\n\n.styleVkPlot__car___2T16- {\n  fill: #03a9f4;\n  rx: 1px;\n  ry: 1px; }\n\n.styleVkPlot__lane___102VD {\n  fill: #e0e0e0;\n  pointer-events: none; }\n\n.styleVkPlot__line___1EUpA {\n  fill: none;\n  stroke: #ad1457;\n  stroke-width: 4px;\n  stroke-linecap: round;\n  pointer-events: none; }\n\n.styleVkPlot__road___3b9Ci {\n  fill: #cfd8dc;\n  opacity: .7;\n  stroke: none; }\n\n.styleVkPlot__axisLabel___2Vfqy {\n  font-size: 15px;\n  fill: black;\n  text-anchor: middle;\n  alignment-baseline: central; }\n\ncircle.styleVkPlot__signal___1VHqV {\n  fill: none;\n  stroke-width: 1px;\n  stroke: #e91e63; }\n", ""]);

// exports
exports.locals = {
	"main": "styleVkPlot__main___18K97",
	"plots": "styleVkPlot__plots___1Pibq",
	"bg": "styleVkPlot__bg___s483E",
	"svg": "styleVkPlot__svg___39HJy",
	"dot": "styleVkPlot__dot___2R1oG",
	"selector": "styleVkPlot__selector___1vCzB",
	"car": "styleVkPlot__car___2T16-",
	"lane": "styleVkPlot__lane___102VD",
	"line": "styleVkPlot__line___1EUpA",
	"road": "styleVkPlot__road___3b9Ci",
	"axisLabel": "styleVkPlot__axisLabel___2Vfqy",
	"signal": "styleVkPlot__signal___1VHqV"
};

/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(34)(undefined);
// imports


// module
exports.push([module.i, ".styleShared__button___3bqt- {\n  padding: 15px;\n  display: inline-block;\n  text-align: center;\n  vertical-align: middle;\n  background-color: white;\n  text-decoration: none;\n  cursor: pointer;\n  border-radius: 2px;\n  color: black;\n  border-radius: 2px;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  will-change: box-shadow;\n  transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1); }\n  .styleShared__button___3bqt-::-moz-focus-inner {\n    border: 0; }\n  .styleShared__button___3bqt-:hover {\n    background-color: rgba(255, 255, 255, 0.95); }\n  .styleShared__button___3bqt-:focus:not(:active) {\n    background-color: rgba(0, 0, 0, 0.12); }\n  .styleShared__button___3bqt-:active {\n    background-color: rgba(255, 255, 255, 0.4);\n    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2); }\n", ""]);

// exports
exports.locals = {
	"button": "styleShared__button___3bqt-"
};

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(271);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__constants__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__constants__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__constants__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__constants__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__constants__["e"]; });


/***/ }),

/***/ 650:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(275);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(55)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!../../../node_modules/sass-loader/lib/loader.js!./styleApp.scss", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!../../../node_modules/sass-loader/lib/loader.js!./styleApp.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 651:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(276);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(55)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!../../../node_modules/sass-loader/lib/loader.js!./styleFI.scss", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!../../../node_modules/sass-loader/lib/loader.js!./styleFI.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 652:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(277);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(55)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!../../../node_modules/sass-loader/lib/loader.js!./stylePde.scss", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!../../../node_modules/sass-loader/lib/loader.js!./stylePde.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 653:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(278);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(55)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!../../../node_modules/sass-loader/lib/loader.js!./styleVkPlot.scss", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!../../../node_modules/sass-loader/lib/loader.js!./styleVkPlot.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(279);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(55)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!../node_modules/sass-loader/lib/loader.js!./styleShared.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!../node_modules/sass-loader/lib/loader.js!./styleShared.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

},[272]);
//# sourceMappingURL=main.js.map