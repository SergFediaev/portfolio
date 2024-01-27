import React from 'react';
import {Container} from "../../../components/Container";
import {FlexWrap} from "../../../components/FlexWrap";
import photo from "../../../assets/images/photo.jpg"
import {Button} from "../../../components/Button";
import {S} from './Main_Styles';

export const Main: React.FC = () => {
    return <S.Main>
        <Container>
            <FlexWrap justify="space-around" align="center" wrap="wrap">
                <S.Info>
                    <S.Title>Sergei Fediaev</S.Title>
                    <S.Subtitle>Frontend developer</S.Subtitle>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus earum facilis optio sint
                        velit. Amet architecto aspernatur, assumenda dolorum eos, harum nisi officiis, perspiciatis
                        quaerat quam reiciendis repellat reprehenderit rerum?</p>
                    <Button as="a" href="https://hh.ru/resume/20f54a99ff0c4d7b5d0039ed1f435368756765">Resume ⤓</Button>
                </S.Info>
                <S.Photo src={photo}/>
            </FlexWrap>
        </Container>
    </S.Main>
};