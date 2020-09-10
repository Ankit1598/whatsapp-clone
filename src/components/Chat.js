import React from "react";
import {
	CHAT,
	CHAT_HEADER,
	CHAT_HEADER_INFO,
	CHAT_HEADER_RIGHT,
	CHAT_BODY,
	CHAT_MSG,
	CHAT_REPLY,
	CHAT_NAME,
	CHAT_TIME,
	CHAT_FOOTER,
} from "./styles/chat";

export default function Chat({ children, ...restProps }) {
	return <CHAT {...restProps}>{children}</CHAT>;
}

Chat.Header = function ChatHeader({ children, ...restProps }) {
	return <CHAT_HEADER {...restProps}>{children}</CHAT_HEADER>;
};

Chat.HeaderInfo = function ChatHeaderInfo({ children, ...restProps }) {
	return <CHAT_HEADER_INFO {...restProps}>{children}</CHAT_HEADER_INFO>;
};

Chat.HeaderRight = function ChatHeaderRight({ children, ...restProps }) {
	return <CHAT_HEADER_RIGHT {...restProps}>{children}</CHAT_HEADER_RIGHT>;
};

Chat.Body = function ChatBody({ children, ...restProps }) {
	return <CHAT_BODY {...restProps}>{children}</CHAT_BODY>;
};

Chat.Reply = function ChatReply({ children, ...restProps }) {
	return <CHAT_REPLY {...restProps}>{children}</CHAT_REPLY>;
};

Chat.Message = function ChatMessage({ children, ...restProps }) {
	return <CHAT_MSG {...restProps}>{children}</CHAT_MSG>;
};

Chat.Name = function ChatName({ children, ...restProps }) {
	return <CHAT_NAME {...restProps}>{children}</CHAT_NAME>;
};

Chat.Time = function ChatTime({ children, ...restProps }) {
	return <CHAT_TIME {...restProps}>{children}</CHAT_TIME>;
};

Chat.Footer = function ChatFooter({ children, ...restProps }) {
	return <CHAT_FOOTER {...restProps}>{children}</CHAT_FOOTER>;
};
