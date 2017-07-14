//@flow
import React, { Component, PureComponent } from "react";
import style from "./styleQkPlot.scss";
import { pure } from "recompose";
import { scaleLinear } from "d3-scale";
// import uniqueId from "lodash/uniqueId";
import { timer } from "d3-timer";
import range from "lodash/range";
import { KJ, VF } from "constants";
import type { DotDatum } from "src/types";
import { line, curveCatmullRom } from "d3-shape";

const WIDTH = 500;
const HEIGHT = 300;
const MAR = 20;
const x = scaleLinear().domain([0, KJ]).range([0, WIDTH]);
const y = scaleLinear().domain([0, VF * 3]).range([HEIGHT, 0]);
const pathMaker = line().x(d => x(d.k)).y(d => y(d.q)).curve(curveCatmullRom);

const Path = pure(({ dots, scale }) => {
	let n = 100;
	let points = range(0, KJ, KJ / n).map(k => ({
		k,
		q: scale(k) * k
	}));
	return <path d={pathMaker(points)} className={style.line} />;
});

export default 
