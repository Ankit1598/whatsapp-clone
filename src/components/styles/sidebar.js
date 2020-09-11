import styled from "styled-components";

export const SIDEBAR = styled.div`
	display: flex;
	flex-direction: column;
	flex: 0.25;

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

export const SIDEBAR_HEADER = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-right: 1px solid ${({ theme }) => theme.border_v};
  }
`;

export const SIDEBAR_HEADER_RIGHT = styled.div`
	& .MuiSvgIcon-root {
		font-size: 24px !important;
	}
`;

export const SIDEBAR_SEARCH = styled.div`
	display: flex;
	align-items: center;
	background: ${({ theme }) => theme.chatList_search_bg};
	height: 39px;
	padding: 10px;
	border-bottom: 1px solid ${({ theme }) => theme.border_h};
`;

export const SIDEBAR_SEARCH_CONTAINER = styled.div`
	display: flex;
	align-items: center;
	background: ${({ theme }) => theme.chatList_search};
	height: 35px;
	width: 100%;
	border-radius: 20px;

	& .MuiSvgIcon-root {
		padding-left: 10px;
		color: gray;
	}

	& input {
		border: none;
		outline-width: 0;
		margin-left: 10px;
		background: transparent;
	}
`;

export const SIDEBAR_CHAT_BODY = styled.div`
	flex: 1;
	background-color: ${({ theme }) => theme.chatList_bg};
	overflow-y: scroll;
`;

export const SIDEBAR_CHAT = styled.div`
	display: flex;
	padding: 20px 20px 0 20px;
	cursor: pointer;

	&:hover {
		background-color: ${({ theme }) => theme.chatList_hover};
		& .MuiIconButton-root {
			display: block;
		}
	}
`;

export const SIDEBAR_CHAT_AVATAR = styled.div`
	margin-right: 15px;
`;

export const SIDEBAR_CHAT_INFO = styled.div`
	width: 100%;
	padding-bottom: 20px;
	border-bottom: 1px solid ${({ theme }) => theme.border_h};

	& h4 {
		display: flex;
		font-size: 16px;
		margin: 0 auto 8px auto;

		& p {
			margin-right: 0;
			font-size: x-small;
			font-weight: normal;
		}
	}
	& p {
		display: flex;
		font-size: 16px;
		color: #b4b4b4;
		margin: 0 auto;
		& .MuiIconButton-root {
			margin-left: auto;
			padding: 0;
			display: none;
		}
	}
`;
