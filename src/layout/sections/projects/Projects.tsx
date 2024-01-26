import React from 'react';
import {Container} from "../../../components/Container";
import {FlexWrap} from "../../../components/FlexWrap";
import styled from "styled-components";
import {Project} from "./Project";
import {theme} from "../../styles/Theme";

export const Projects: React.FC = () => {
    return <Container>
        <FlexWrap direction="column">
            <Title>Projects</Title>
            <StyledProjects>
                <Project/>
                <Project/>
                <Project/>
            </StyledProjects>
        </FlexWrap>
    </Container>
};

const StyledProjects = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: ${theme.dimensions.itemSpace};
    background-color: deepskyblue;
`

const Title = styled.h2`
    margin-bottom: ${theme.dimensions.itemSpace};
`