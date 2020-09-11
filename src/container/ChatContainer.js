import React, { useState } from "react";
import Chat from "../components/Chat";
import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import AttachFileIcon from "@material-ui/icons/AttachFile";

import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import CloseIcon from "@material-ui/icons/Close";
import GifIcon from "@material-ui/icons/Gif";

import MicIcon from "@material-ui/icons/Mic";
import MicOffIcon from "@material-ui/icons/MicOff";

import MessageContainer from "./MessageContainer";

function ChatContainer({ theme }) {
	const options = {
		hour12: false,
		hour: "2-digit",
		minute: "2-digit",
	};

	const light = {
		backgroundImage:
			"url('https://web.whatsapp.com/img/bg-chat-tile-light_686b98c9fdffef3f63127759e2057750.png')",
	};

	const dark = {
		backgroundImage:
			"url('https://web.whatsapp.com/img/bg-chat-tile-dark_9f39e76b5a0e039e53afc5d9d4bdd780.png')",
	};

	const [mic, setMic] = useState(false);
	const handleMic = () => setMic(!mic);

	const [emoji, setEmoji] = useState(false);
	const handleEmoji = () => setEmoji(!emoji);

	return (
		<Chat>
			<Chat.Header>
				<Avatar />
				<Chat.HeaderInfo>
					<h3>Friend</h3>
					<p>Last Seen @ {new Date().toLocaleTimeString("en-US", options)}</p>
				</Chat.HeaderInfo>
				<Chat.HeaderRight>
					<IconButton>
						<SearchIcon />
					</IconButton>
					<IconButton>
						<AttachFileIcon />
					</IconButton>
					<IconButton>
						<MoreVertIcon />
					</IconButton>
				</Chat.HeaderRight>
			</Chat.Header>
			<Chat.Body style={theme === "Light" ? dark : light}>
				<MessageContainer msgType={true} name='Me' msg='Hi' />
				<MessageContainer msgType={false} name='Friend' msg='Hi bro' />
			</Chat.Body>
			<Chat.Footer>
				<IconButton onClick={handleEmoji}>
					{emoji ? <CloseIcon /> : <InsertEmoticonIcon />}
				</IconButton>
				<>
					{emoji ? (
						<>
							<IconButton>
								<InsertEmoticonIcon />
							</IconButton>
							<IconButton>
								<GifIcon />
							</IconButton>
						</>
					) : (
						<></>
					)}
				</>
				<form>
					<input type='text' placeholder='Type a message' />
					<button type='submit'>Send a message</button>
				</form>
				<IconButton onClick={handleMic}>
					{mic ? <MicIcon /> : <MicOffIcon />}
				</IconButton>
			</Chat.Footer>
		</Chat>
	);
}

export default ChatContainer;
