import styled from "styled-components";
import {theme} from "../styles/Theme";

export const SectionTitle = styled.h2`
    text-align: center;
    margin-bottom: ${theme.dimensions.itemSpace};
    font-size: ${theme.dimensions.titleSize};
    color: ${theme.colors.primaryAccent};
`