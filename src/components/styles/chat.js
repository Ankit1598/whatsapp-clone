import styled from 'styled-components';

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
  padding: 20px;
  border-right: 1px solid #d3d3d3;
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

export const CHAT_HEADER_RIGHT = styled.div`

`;

export const CHAT_BODY = styled.div`
  flex: 1;
  background-image: url('https://web.whatsapp.com/img/bg-chat-tile-dark_9f39e76b5a0e039e53afc5d9d4bdd780.png');
  background-repeat: repeat;
  background-position: center;
  padding: 30px;
  overflow-y: scroll;
`;

export const CHAT_MSG = styled.p`
  position: relative;
  font-size: 16px;
  padding: 10px;
  width: fit-content;
  border-radius: 10px;
  background-color: #fff;
  margin-bottom: 30px;
  margin-left: auto;
  background-color: #dcf8c6;
`;

export const CHAT_REPLY = styled.p`
  position: relative;
  font-size: 16px;
  padding: 10px;
  width: fit-content;
  border-radius: 10px;
  background-color: #fff;
  margin-bottom: 30px;
`;

export const CHAT_NAME = styled.span`
  position: absolute;
  top: -15px;
  fonr-weight: 800;
  font-size: xx-small;
`;

export const CHAT_TIME = styled.span`
  margin-left: 10px;
  font-size: xx-small;
`;

export const CHAT_FOOTER = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  border-top: 1px solid #d3d3d3;

  & .MuiSvgIcon-root {
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
    }

    & button {
      display: none;
    }
  }
`;