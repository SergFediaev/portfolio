import {createGlobalStyle} from "styled-components";

export const GlobalStyled = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: solid red 1px;
    }

    ul {
        list-style: none;
    }

    html {
        font-size: 20px;
    }
`