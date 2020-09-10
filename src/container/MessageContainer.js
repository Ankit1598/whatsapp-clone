import React from "react";
import Chat from "../components/Chat";

function MessageContainer({ msgType, name, msg }) {
	return (
		<>
			{msgType ? (
				<Chat.Message>
					<Chat.Name> {name} </Chat.Name>
					{msg}
					<Chat.Time> {new Date().toLocaleTimeString()} </Chat.Time>
				</Chat.Message>
			) : (
				<Chat.Reply>
					<Chat.Name> {name} </Chat.Name>
					{msg}
					<Chat.Time> {new Date().toLocaleTimeString()} </Chat.Time>
				</Chat.Reply>
			)}
		</>
	);
}

export default MessageContainer;
