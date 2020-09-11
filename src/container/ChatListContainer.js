import React from "react";
import Sidebar from "../components/Sidebar";
import { Avatar, IconButton } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function ChatListContainer({ user, lstMsg }) {
	const options = {
		hour12: false,
		hour: "2-digit",
		minute: "2-digit",
	};

	return (
		<Sidebar.Chat>
			<Sidebar.Chat_Avatar>
				<Avatar />
			</Sidebar.Chat_Avatar>
			<Sidebar.Chat_Info>
				<h4>
					{user}
					<p>{new Date().toLocaleTimeString("en-US", options)}</p>
				</h4>

				<p>
					{lstMsg}
					<IconButton>
						<ExpandMoreIcon />
					</IconButton>
				</p>
			</Sidebar.Chat_Info>
		</Sidebar.Chat>
	);
}

export default ChatListContainer;
