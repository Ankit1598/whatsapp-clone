import React from "react";
import { Main, Body } from "./components";
import SidebarContainer from './container/SidebarContainer'
import ChatContainer from "./container/ChatContainer";

function App() {
	return (
		<Main>
      <Body>
        <SidebarContainer />
        <ChatContainer />
			</Body>
		</Main>
	);
}

export default App;
