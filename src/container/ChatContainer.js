import React, { useState } from "react";
import Chat from "../components/Chat";
import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import MicOffIcon from "@material-ui/icons/MicOff";

import MessageContainer from "./MessageContainer";

function App() {
	const [mic, setMic] = useState(false);
	const handleMic = () => setMic(!mic);

	return (
		<Chat>
			<Chat.Header>
				<Avatar />
				<Chat.HeaderInfo>
					<h3>Friend</h3>
					<p>Last Seen @ {new Date().toLocaleTimeString()}</p>
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
			<Chat.Body>
				<MessageContainer msgType={true} name='Me' msg='Hi' />
				<MessageContainer msgType={false} name='Friend' msg='Hi bro' />
			</Chat.Body>
			<Chat.Footer>
				<IconButton>
					<InsertEmoticonIcon />
				</IconButton>
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

export default App;
