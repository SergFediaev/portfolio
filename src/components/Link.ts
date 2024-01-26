import styled from "styled-components";
import {theme} from "../layout/styles/Theme";

export const Link = styled.a`
    border-bottom: solid 4px ${theme.colors.primaryAccent};
    transition: ${theme.animations.defaultDuration};
    display: inline-block;

    &:hover {
        color: ${theme.colors.primaryAccent};
        transform: scale(1.1);
    }
`