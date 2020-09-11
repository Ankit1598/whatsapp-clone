import React from "react";
import { MAIN, MAIN_TOGGLE, BODY } from "./styles/app";

export function Main({ children, ...restProps }) {
	return <MAIN {...restProps}>{children}</MAIN>;
}
Main.Toggle = function ({ children, ...restProps }) {
	return <MAIN_TOGGLE {...restProps}>{children}</MAIN_TOGGLE>;
};

export function Body({ children, ...restProps }) {
	return <BODY {...restProps}>{children}</BODY>;
}
