import styled from "styled-components";

export const MAIN = styled.div`
	display: grid;
	place-items: center;
	height: 100vh;
	background: ${({ theme }) => theme.main_bg};
	color: ${({ theme }) => theme.color};

	& .MuiIconButton-root {
		color: ${({ theme }) => theme.icon};
	}
	& p {
		// margin: 0 auto;
	}
`;

export const MAIN_TOGGLE = styled.div`
	display: flex;
`;

export const BODY = styled.div`
	display: flex;
	background: ${({ theme }) => theme.body_bg};
	height: 90vh;
	width: 90vw;
	box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2);
`;
