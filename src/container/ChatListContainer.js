import React from "react";
import Sidebar from "../components/Sidebar";
import { Avatar } from "@material-ui/core";

function Chats({ user, lstMsg }) {
	return (
		<Sidebar.Chat>
			<Avatar />
			<Sidebar.Chat_Info>
				<h4>{user}</h4>
				<p>{ lstMsg }</p>
			</Sidebar.Chat_Info>
		</Sidebar.Chat>
	);
}

export default Chats;
