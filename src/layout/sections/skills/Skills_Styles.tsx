import {theme} from "../../../styles/Theme";
import styled from "styled-components";
import {FlexWrap} from "../../../components/FlexWrap";

const Skills = styled.section`
    ${FlexWrap} {
        gap: 100px;
    }
`

const Text = styled.div`
    max-width: 800px;
    margin: 0 auto ${theme.dimensions.itemSpace};
`

export const S = {
    Skills,
    Text,
}