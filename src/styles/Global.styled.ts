import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

export const GlobalStyled = createGlobalStyle`
    @font-face {
        font-family: Inter;
        src: local("Inter"),
        local("Inter Regular"),
        local("Inter-Regular"),
        url(../assets/fonts/inter-regular.eot?) format("eot"),
        url(../assets/fonts/inter-regular.woff2) format("woff2"),
        url(../assets/fonts/inter-regular.ttf) format("truetype");
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: Inter;
        src: local("Inter Bold"),
        local("Inter-Bold"),
        url(../assets/fonts/inter-bold.eot?) format("eot"),
        url(../assets/fonts/inter-bold.woff2) format("woff2"),
        url(../assets/fonts/inter-bold.ttf) format("truetype");
        font-weight: bold;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: Inter;
        src: local("Inter Black"),
        local("Inter-Black"),
        url(../assets/fonts/inter-black.eot?) format("eot"),
        url(../assets/fonts/inter-black.woff2) format("woff2"),
        url(../assets/fonts/inter-black.ttf) format("truetype");
        font-weight: 900;
        font-style: normal;
        font-display: swap;
    }

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