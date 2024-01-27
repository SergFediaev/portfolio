import {theme} from "../../../styles/Theme";
import {FlexWrap} from "../../../components/FlexWrap";
import styled from "styled-components";

const Projects = styled.section`
    ${FlexWrap} {
        gap: ${theme.dimensions.itemSpace};
    }
`

const Project = styled.div`
    max-width: 500px;
    border-radius: ${theme.dimensions.cardRadius};
    overflow-y: hidden;
    background-color: ${theme.colors.itemSurface};
    box-shadow: ${theme.shadows.card};
`

const Preview = styled.img`
    width: 100%;
    display: block;
`

const Title = styled.h2`
    font-size: ${theme.dimensions.subtitleSize};
`

const Description = styled.p`
    margin: ${theme.dimensions.lineSpace} 0;
`

const Info = styled.div`
    padding: ${theme.dimensions.itemSpace};
`

export const S = {
    Projects,
    Project,
    Preview,
    Title,
    Description,
    Info,
}