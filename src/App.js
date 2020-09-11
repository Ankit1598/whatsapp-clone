import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { IconButton } from "@material-ui/core";
import ToggleOnIcon from "@material-ui/icons/ToggleOn";
import ToggleOffIcon from "@material-ui/icons/ToggleOff";

import { lightTheme, darkTheme } from "./theme/theme";
import { Main, Body } from "./components";
import SidebarContainer from "./container/SidebarContainer";
import ChatContainer from "./container/ChatContainer";

function App() {
	const [bg, setBG] = useState(false);
	const [theme, setTheme] = useState("light");

	const toggleTheme = () => {
		if (theme === "light") {
			setTheme("dark");
			setBG(!bg);
		} else {
			setTheme("light");
			setBG(!bg);
		}
	};
	return (
		<ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
			<Main>
				<Main.Toggle>
					<IconButton onClick={toggleTheme}>
						{bg ? <ToggleOnIcon /> : <ToggleOffIcon />}
					</IconButton>
					<h6>{theme === "light" ? "Light" : "Dark"} Theme</h6>
				</Main.Toggle>
				<Body>
					<SidebarContainer />
					<ChatContainer theme={theme === "light" ? "Light" : "Dark"} />
				</Body>
			</Main>
		</ThemeProvider>
	);
}

export default App;
