import React from 'react';
import {Link} from "../../../components/Link";
import {S} from './Projects_Styles';

type ProjectPropsType = {
    preview: string
    title: string
    description: string
    link: string
}

export const Project: React.FC<ProjectPropsType> = (props: ProjectPropsType) => {
    return <S.Project>
        <S.Preview src={props.preview}/>
        <S.Info>
            <S.Title>{props.title}</S.Title>
            <S.Description>{props.description}</S.Description>
            <Link href={props.link}>Learn more ⟶</Link>
        </S.Info>
    </S.Project>
};