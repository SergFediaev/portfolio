import React from 'react';
import {theme} from "../../styles/Theme";
import styled from "styled-components";
import {Container} from "../../../components/Container";

export const Skills: React.FC = () => {
    return <SkillsWrap>
        <Container>
            <Title>Skills</Title>
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio odit qui sint. A adipisci asperiores
                aut
                deserunt ducimus enim inventore itaque modi repudiandae tempore? Aliquam eveniet ex labore pariatur
                reiciendis.</Text>
        </Container>
        <StyledSkills>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
        </StyledSkills>
    </SkillsWrap>
};

const Title = styled.h2`

`

const SkillsWrap = styled.div`
    padding: 100px 0;
    background-color: floralwhite;
`

const StyledSkills = styled.div`
    display: flex;
    gap: ${theme.dimensions.itemSpace};
    background-color: darkblue;
    padding: ${theme.dimensions.itemSpace} 0;
`

const Text = styled.p`
    max-width: 800px;
    margin: ${theme.dimensions.lineSpace} 0;
`

const Skill = styled.div`
    width: 100px;
    height: 100px;
    background-color: bisque;
`