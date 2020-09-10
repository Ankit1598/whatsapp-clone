import React from "react";
import { MAIN, BODY } from "./styles/app";

export function Main({ children, ...restProps }) {
	return <MAIN {...restProps}>{children}</MAIN>;
}

export function Body({ children, ...restProps }) {
	return <BODY {...restProps}>{children}</BODY>;
}
