import React from "react";
import Chat from "../components/Chat";

function MessageContainer({ msgType, name, msg }) {
	const options = {
		hour12: false,
		hour: "2-digit",
		minute: "2-digit",
	};

	return (
		<>
			{msgType ? (
				<Chat.Message>
					<Chat.Name> {name} </Chat.Name>
					{msg}
					<Chat.Time>
						{new Date().toLocaleTimeString("en-US", options)}
					</Chat.Time>
				</Chat.Message>
			) : (
				<Chat.Reply>
					<Chat.Name> {name} </Chat.Name>
					{msg}
					<Chat.Time>
						{new Date().toLocaleTimeString("en-US", options)}
					</Chat.Time>
				</Chat.Reply>
			)}
		</>
	);
}

export default MessageContainer;
