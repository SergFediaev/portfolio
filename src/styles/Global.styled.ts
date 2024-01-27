import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

export const GlobalStyled = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Inter, Arial, Helvetica, sans-serif;
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
        line-height: 1.4;
        scroll-behavior: smooth;
    }

    body {
        min-width: 360px;
        color: ${theme.colors.text};
        background-color: ${theme.colors.primarySurface};
    }

    button {
        background-color: unset;
        border: none;
    }
`