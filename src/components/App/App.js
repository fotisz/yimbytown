//@flow
import React, { Component, PureComponent } from "react";
import style from "./styleApp.scss";
import VkPlot from "components/VkPlot";
import uniqueId from "lodash/uniqueId";
import { VF, KJ } from "constants";
import type { DotDatum } from "src/types";
import memoize from "lodash/memoize";
import { scaleLinear } from "d3-scale";

const getScale = memoize((dots: Array<Dots>) => {
	return scaleLinear().domain(dots.map(d => d.k)).range(dots.map(d => d.v));
});

export default class App extends PureComponent {
	state: {
		dots: Array<DotDatum>
	};
	state = {
		dots: [{ id: "a", k: 0, v: VF }, { id: "b", k: KJ, v: 0 }]
	};

	deleteDot = (id: string) => {
		if ((id == "a") | (id == "b")) return;
		this.setState(({ dots }) => ({
			dots: dots.filter(d => d.id !== id)
		}));
	};

	updateDot = (id: string, k: number, v: number) => {
		if (id == "a" || id == "b") return;
		// let lastV = 0;
		this.setState(({ dots }) => ({
			dots: dots.map((d, i) => {
				if (d.id !== id) return d;
				v = Math.max(Math.min(dots[i - 1].v, v), dots[i + 1].v);
				k = Math.min(dots[i + 1].k, Math.max(dots[i - 1].k, k));
				return {
					id: d.id,
					k,
					v
				};
			})
			// .sort((a, b) => a.k - b.k)
		}));
	};

	addDot = (id: string, k: number, v: number) => {
		this.setState(({ dots }) => ({
			dots: dots.concat({ id, k, v }).sort((a, b) => a.k - b.k)
		}));
	};

	render() {
		let scale = getScale(this.state.dots);
		return (
			<div className={style.app}>
				<VkPlot
					scale={scale}
					dots={this.state.dots}
					addDot={this.addDot}
					updateDot={this.updateDot}
					deleteDot={this.deleteDot}
				/>
			</div>
		);
	}
}
