import React from 'react';
import {theme} from "../../styles/Theme";
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrap} from "../../../components/FlexWrap";
import {Icon} from "../../../components/Icon";

export const Skills: React.FC = () => {
    return <StyledSkills id="skills">
        <Container>
            <SectionTitle>Skills</SectionTitle>
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio odit qui sint. A adipisci asperiores
                aut
                deserunt ducimus enim inventore itaque modi repudiandae tempore? Aliquam eveniet ex labore pariatur
                reiciendis.</Text>
            <FlexWrap justify="center" wrap="wrap">
                <Icon iconId="react"/>
                <Icon iconId="typeScript"/>
                <Icon iconId="javaScript"/>
                <Icon iconId="docker"/>
                <Icon iconId="styledComponents"/>
                <Icon iconId="reactNative"/>
                <Icon iconId="redux"/>
                <Icon iconId="html"/>
                <Icon iconId="css"/>
                <Icon iconId="bootstrap"/>
                <Icon iconId="sass"/>
                <Icon iconId="git"/>
                <Icon iconId="vsCode"/>
                <Icon iconId="gitHub"/>
                <Icon iconId="tailwind"/>
            </FlexWrap>
        </Container>
    </StyledSkills>
};

const StyledSkills = styled.section`
    ${FlexWrap} {
        gap: 100px;
    }
`

const Text = styled.div`
    max-width: 800px;
    margin: 0 auto ${theme.dimensions.itemSpace};
`