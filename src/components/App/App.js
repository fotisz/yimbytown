import React from "react";
import { HashRouter, Route, Link } from "react-router-dom";
import VkPlot from "components/VkPlot";
import { app, header, button, content } from "./styleApp.scss";

const Home = () => <div>hello</div>;

export default () => (
	<HashRouter>
		<div className={app}>
			<div className={header}>
				<Link to="/">
					<div className={button}>Home</div>
				</Link>
				<Link to="/vk">
					<div className={button}>Speed-Density Plot</div>
				</Link>
			</div>
			<div className={content}>
				<Route exact path="/" component={Home} />
				<Route path="/vk" component={VkPlot} />
			</div>
		</div>
	</HashRouter>
);
