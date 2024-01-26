import React from 'react';
import {Container} from "../../../components/Container";
import {FlexWrap} from "../../../components/FlexWrap";
import styled from "styled-components";
import {Project} from "./Project";
import {theme} from "../../styles/Theme";
import {SectionTitle} from "../../../components/SectionTitle";

export const Projects: React.FC = () => {
    return <StyledProjects>
        <Container>
            <SectionTitle>Projects</SectionTitle>
            <FlexWrap justify="space-around" align="flex-start" wrap="wrap">
                <Project/>
                <Project/>
                <Project/>
            </FlexWrap>
        </Container>
    </StyledProjects>
};

const StyledProjects = styled.section`
    ${FlexWrap} {
        gap: ${theme.dimensions.itemSpace};
    }
`