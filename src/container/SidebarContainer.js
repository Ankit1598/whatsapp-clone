import React from "react";
import Sidebar from "../components/Sidebar";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";

import ChatListContainer from "./ChatListContainer";

function SidebarContainer() {
	return (
		<Sidebar>
			<Sidebar.Header>
				<Avatar
					alt='User'
					src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.evilmartians.com%2Ffront%2Fposts%2Foptimizing-react-virtual-dom-explained%2Fcover-a1d5b40.png&f=1&nofb=1'
				/>
				<Sidebar.HeaderRight>
					<IconButton>
						<DonutLargeIcon />
					</IconButton>
					<IconButton>
						<ChatIcon />
					</IconButton>
					<IconButton>
						<MoreVertIcon />
					</IconButton>
				</Sidebar.HeaderRight>
			</Sidebar.Header>
			<Sidebar.Search>
				<Sidebar.SearchContainer>
					<SearchIcon />
					<input type='text' placeholder='Search or start a new chat' />
				</Sidebar.SearchContainer>
			</Sidebar.Search>
			<Sidebar.ChatList>
				<ChatListContainer user='Friend 1' lstMsg='F1 Last Message' />
				<ChatListContainer user='Friend 2' lstMsg='F2 Last Message' />
				<ChatListContainer user='Friend 3' lstMsg='F3 Last Message' />
				<ChatListContainer user='Friend 4' lstMsg='F4 Last Message' />
			</Sidebar.ChatList>
		</Sidebar>
	);
}

export default SidebarContainer;
