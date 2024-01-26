import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

export const GlobalStyled = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        //outline: solid red 1px; // Debug.
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: ${theme.colors.text};
    }

    section {
        padding: 100px 0;
    }

    html {
        font-size: 20px;
        font-family: Arial, sans-serif;
        scroll-behavior: smooth;
    }

    body {
        min-width: 360px;
        color: ${theme.colors.text};
        background-color: ${theme.colors.primarySurface};
        line-height: 1.4;
    }

    button {
        background-color: unset;
        border: none;
    }
`