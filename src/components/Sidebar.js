import React from "react";
import {
	SIDEBAR,
	SIDEBAR_HEADER,
	SIDEBAR_HEADER_RIGHT,
	SIDEBAR_SEARCH,
	SIDEBAR_SEARCH_CONTAINER,
	SIDEBAR_CHAT_BODY,
	SIDEBAR_CHAT_AVATAR,
	SIDEBAR_CHAT_INFO,
	SIDEBAR_CHAT,
} from "./styles/sidebar";

export default function Sidebar({ children, ...restProps }) {
	return <SIDEBAR {...restProps}>{children}</SIDEBAR>;
}

Sidebar.Header = function SidebarHeader({ children, ...restProps }) {
	return <SIDEBAR_HEADER {...restProps}>{children}</SIDEBAR_HEADER>;
};

Sidebar.HeaderRight = function SidebarHeaderRight({ children, ...restProps }) {
	return <SIDEBAR_HEADER_RIGHT {...restProps}>{children}</SIDEBAR_HEADER_RIGHT>;
};

Sidebar.Search = function SidebarSearch({ children, ...restProps }) {
	return <SIDEBAR_SEARCH {...restProps}>{children}</SIDEBAR_SEARCH>;
};

Sidebar.SearchContainer = function SidebarSearchContainer({
	children,
	...restProps
}) {
	return (
		<SIDEBAR_SEARCH_CONTAINER {...restProps}>
			{children}
		</SIDEBAR_SEARCH_CONTAINER>
	);
};

Sidebar.ChatList = function SidebarChat({ children, ...restProps }) {
	return <SIDEBAR_CHAT_BODY {...restProps}>{children}</SIDEBAR_CHAT_BODY>;
};

Sidebar.Chat = function SidebarChat({ children, ...restProps }) {
	return <SIDEBAR_CHAT {...restProps}>{children}</SIDEBAR_CHAT>;
};

Sidebar.Chat_Avatar = function SidebarChatAVATAR({ children, ...restProps }) {
	return <SIDEBAR_CHAT_AVATAR {...restProps}>{children}</SIDEBAR_CHAT_AVATAR>;
};

Sidebar.Chat_Info = function SidebarChatInfo({ children, ...restProps }) {
	return <SIDEBAR_CHAT_INFO {...restProps}>{children}</SIDEBAR_CHAT_INFO>;
};