import styled from 'styled-components';

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
  border-right: 1px solid #d3d3d3;
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
  background: #f6f6f6;
  height: 39px;
  padding: 10px;
`;

export const SIDEBAR_SEARCH_CONTAINER = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
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
  }
`;

export const SIDEBAR_CHAT_BODY = styled.div`
  flex: 1;
  background-color: #fff;
  overflow-y: scroll;
`;

export const SIDEBAR_CHAT = styled.div`
  display: flex;
  padding: 20px;
  cursor: pointer;
  border-bottom: 1px solid #f6f6f6;

  &:hover {
    background-color: #ebebeb;
  }
`;

export const SIDEBAR_CHAT_INFO = styled.div`
  margin-left: 15px;
  
  & h4 {
    font-size: 16px;
    margin: 0 auto 8px auto;
  }
  & p {
    font-size: 16px;
    margin: 0 auto;
  }
`;