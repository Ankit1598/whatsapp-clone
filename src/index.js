import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyles } from "./global-styles";

ReactDOM.render(
	<>
		<GlobalStyles />
		<App />
	</>,
	document.getElementById("root")
);
