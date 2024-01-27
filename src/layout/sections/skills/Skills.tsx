import React from 'react';
import {Container} from "../../../components/Container";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrap} from "../../../components/FlexWrap";
import {Icon} from "../../../components/Icon";
import {S} from './Skills_Styles';

const skills = [
    {
        id: 1,
        sprite: "react",
    },
    {
        id: 2,
        sprite: "javaScript",
    },
    {
        id: 3,
        sprite: "typeScript",
    },
    {
        id: 4,
        sprite: "docker",
    },
    {
        id: 5,
        sprite: "styledComponents",
    },
    {
        id: 6,
        sprite: "reactNative",
    },
    {
        id: 7,
        sprite: "redux",
    },
    {
        id: 8,
        sprite: "html",
    },
    {
        id: 9,
        sprite: "css",
    },
    {
        id: 10,
        sprite: "sass",
    },
    {
        id: 11,
        sprite: "bootstrap",
    },
    {
        id: 12,
        sprite: "git",
    },
    {
        id: 13,
        sprite: "gitHub",
    },
    {
        id: 14,
        sprite: "vsCode",
    },
    {
        id: 15,
        sprite: "tailwind",
    },
]

export const Skills: React.FC = () => {
    return <S.Skills id="skills">
        <Container>
            <SectionTitle>Skills</SectionTitle>
            <S.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio odit qui sint. A adipisci asperiores
                aut
                deserunt ducimus enim inventore itaque modi repudiandae tempore? Aliquam eveniet ex labore pariatur
                reiciendis.</S.Text>
            <FlexWrap justify="center" wrap="wrap">
                {skills.map((skill) => {
                    return <Icon key={skill.id} iconId={skill.sprite}/>
                })}
            </FlexWrap>
        </Container>
    </S.Skills>
};