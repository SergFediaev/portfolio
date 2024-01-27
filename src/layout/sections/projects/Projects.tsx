import React from 'react';
import {Container} from "../../../components/Container";
import {FlexWrap} from "../../../components/FlexWrap";
import {Project} from "./Project";
import {SectionTitle} from "../../../components/SectionTitle";
import {S} from './Projects_Styles';
import preview from "../../../assets/images/project.jpg"

const projects = [
    {
        id: 1,
        preview: preview,
        title: "Timer",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque blanditiis, consequatur cupiditate dolore earum eius facere laborum laudantium magni nesciunt nisi placeat, sed sint suscipit voluptas! Culpa eius mollitia non.",
        link: "#",
    },
    {
        id: 2,
        preview: preview,
        title: "Social network",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque blanditiis, consequatur cupiditate dolore earum eius facere laborum laudantium magni nesciunt nisi placeat, sed sint suscipit voluptas! Culpa eius mollitia non.",
        link: "#",
    },
    {
        id: 3,
        preview: preview,
        title: "To-do list",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque blanditiis, consequatur cupiditate dolore earum eius facere laborum laudantium magni nesciunt nisi placeat, sed sint suscipit voluptas! Culpa eius mollitia non.",
        link: "#",
    },
]

export const Projects: React.FC = () => {
    return <S.Projects id="projects">
        <Container>
            <SectionTitle>Projects</SectionTitle>
            <FlexWrap justify="space-around" align="flex-start" wrap="wrap">
                {projects.map((project) => {
                    return <Project
                        key={project.id}
                        preview={project.preview}
                        title={project.title}
                        description={project.description}
                        link={project.link}/>
                })}
            </FlexWrap>
        </Container>
    </S.Projects>
};