import React from "react";
import { HashRouter, Route, Link } from "react-router-dom";
import VkPlot from "components/VkPlot";
import PDE from "components/PDE";
import { app, header, content } from "./styleApp.scss";
import { button } from "src/styleShared.scss";

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
				<Link to="/pde">
					<div className={button}>LWR</div>
				</Link>
			</div>
			<div className={content}>
				<Route exact path="/" component={Home} />
				<Route path="/vk" component={VkPlot} />
				<Route path="/pde" component={PDE} />
			</div>
		</div>
	</HashRouter>
);
