import {theme} from "../../../styles/Theme";
import styled from "styled-components";
import {FlexWrap} from "../../../components/FlexWrap";

const Main = styled.section`
    min-height: 100vh;
    display: flex;

    ${FlexWrap} {
        gap: ${theme.dimensions.itemSpace};
    }
`

const Info = styled.div`
    text-align: left;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: ${theme.dimensions.lineSpace};
`

const Photo = styled.img`
    max-width: 500px;
    width: 100%;
    border: 4px solid ${theme.colors.primaryAccent};
    border-radius: 50%;
    box-shadow: ${theme.shadows.card};
`

const Title = styled.h1`
    font-size: ${theme.dimensions.titleSize};
    color: ${theme.colors.primaryAccent};
`

const Subtitle = styled.h2`
    font-size: ${theme.dimensions.subtitleSize};
`

export const S = {
    Main,
    Info,
    Photo,
    Title,
    Subtitle,
}