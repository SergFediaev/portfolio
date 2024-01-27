import React from 'react';
import {Container} from "../../../components/Container";
import {FlexWrap} from "../../../components/FlexWrap";
import {Project} from "./Project";
import {SectionTitle} from "../../../components/SectionTitle";
import {S} from './Projects_Styles';
import socialNetwork from "../../../assets/images/social-network.jpg"
import timer from "../../../assets/images/timer.jpg"
import toDoList from "../../../assets/images/to-do-list.jpg"

const projects = [
    {
        id: 1,
        preview: timer,
        title: "Timer",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque blanditiis, consequatur cupiditate dolore earum eius facere laborum laudantium magni nesciunt nisi placeat, sed sint suscipit voluptas! Culpa eius mollitia non.",
        link: "#",
    },
    {
        id: 2,
        preview: socialNetwork,
        title: "Social network",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque blanditiis, consequatur cupiditate dolore earum eius facere laborum laudantium magni nesciunt nisi placeat, sed sint suscipit voluptas! Culpa eius mollitia non.",
        link: "#",
    },
    {
        id: 3,
        preview: toDoList,
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