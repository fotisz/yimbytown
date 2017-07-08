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
import { line } from "d3-shape";

const WIDTH = 500;
const HEIGHT = 300;
const MAR = 20;
const x = scaleLinear().domain([0, KJ]).range([0, WIDTH]);
const y = scaleLinear().domain([0, VF * 3]).range([HEIGHT, 0]);
const pathMaker = line().x(d => x(d.k)).y(d => y(d.q));

class Dot extends PureComponent {
	render() {
		return (
			<g transform={`translate(${x(this.props.k)},${y(this.props.q)})`}>
				<circle r="5" className={style.dot} />
			</g>
		);
	}
}

const Path = pure(({ dots, scale }) => {
	let n = 50;
	let points = range(0, KJ, KJ/n).map(k => ({
		k,
		q: scale(k) * k
	}));
	return <path d={pathMaker(points)} className={style.line} />;
});

export default class QkPlot extends PureComponent {
	props: {
		dots: Array<DotDatum>,
		scale: Function
	};

	render() {
		// let
		return (
			<svg
				className={style.svg}
				width={WIDTH + 2 * MAR}
				height={HEIGHT + 2 * MAR}
			>
				<g transform={`translate(${MAR},${MAR})`}>
					<rect className={style.bg} width={WIDTH} height={HEIGHT} />
					{this.props.dots
						.slice(1, this.props.dots.length - 1)
						.map((d, i) => <Dot key={d.id} k={d.k} q={d.q} id={d.id} />)}
					<Path dots={this.props.dots} scale={this.props.scale} />
				</g>
			</svg>
		);
	}
}
