import styled from "styled-components";
import {theme} from "../layout/styles/Theme";

export const Button = styled.button`
    background-color: ${theme.colors.primaryAccent};
    color: ${theme.colors.itemSurface};
    font-size: ${theme.dimensions.textSize};
    border-radius: ${theme.dimensions.buttonRadius};
    padding: ${theme.dimensions.lineSpace};
    border: 2px solid transparent;
    transition: ${theme.animations.defaultDuration};
    text-align: center;
    cursor: pointer;

    &:hover {
        background-color: transparent;
        color: ${theme.colors.primaryAccent};
        border-color: ${theme.colors.primaryAccent};
    }
`