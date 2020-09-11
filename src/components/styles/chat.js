import styled from "styled-components";
// console.log(theme);
export const CHAT = styled.div`
	display: flex;
	flex-direction: column;
	flex: 0.75;

	& ::-webkit-scrollbar {
		width: 5px;
	}

	/* Track */
	& ::-webkit-scrollbar-track {
		border-radius: 10px;
	}

	/* Handle */
	& ::-webkit-scrollbar-thumb {
		background: grey;
		border-radius: 10px;
	}
`;

export const CHAT_HEADER = styled.div`
	display: flex;
	align-items: center;
	padding: 10px;
	border-right: 1px solid ${({ theme }) => theme.border_v};
`;

export const CHAT_HEADER_INFO = styled.div`
	flex: 1;
	padding-left: 20px;

	& h3 {
		margin: 0 auto 3px auto;
		font-weight: 500;
	}
	& p {
		margin: 0 auto;
		color: #808080;
	}
`;

export const CHAT_HEADER_RIGHT = styled.div``;

export const CHAT_BODY = styled.div`
	flex: 1;
	background: ${({ theme }) => theme.chat_bg};
	padding: 30px;
	overflow-y: scroll;
`;

export const CHAT_MSG = styled.p`
	position: relative;
	font-size: 16px;
	padding: 10px;
	width: fit-content;
	border-radius: 10px;
	margin-bottom: 30px;
	margin-left: auto;
	background-color: ${({ theme }) => theme.msg_bg};
`;

export const CHAT_REPLY = styled.p`
	position: relative;
	font-size: 16px;
	padding: 10px;
	width: fit-content;
	border-radius: 10px;
	background-color: ${({ theme }) => theme.reply_bg};
	margin-bottom: 30px;
`;

export const CHAT_NAME = styled.span`
	position: absolute;
	top: -15px;
	font-weight: 800;
	font-size: x-small;
`;

export const CHAT_TIME = styled.span`
	position: relative;
	top: 5px;
	margin-left: 10px;
	font-size: xx-small;
`;

export const CHAT_FOOTER = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 70px;
	background-color: ${({ theme }) => theme.chat_foot}
	border-top: 1px solid ${({ theme }) => theme.border_h};
	& .MuiIconButton-root {
		padding: 10px;
		font-size: 24px;
	}

	& form {
		display: flex;
		flex: 1;

		& input {
			flex: 1;
			border-radius: 30px;
			padding: 10px;
			border: none;
			outline-width: 0;
			font-size: 20px;
			background-color: ${({ theme }) => theme.chat_input};
		}

		& button {
			display: none;
		}
	}
`;
