import React from 'react';
import {Container} from "../../../components/Container";
import {FlexWrap} from "../../../components/FlexWrap";
import photo from "../../../assets/images/photo.jpg"
import photoOverlay from "../../../assets/images/photo-overlay.png"
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
                    <Button as="a" href="https://hh.ru/resume/12b9af98ff0ccda8230039ed1f69694a514d50">Resume ⤓</Button>
                </S.Info>
                <S.PhotoHolder>
                    <S.Photo src={photo}/>
                    <S.PhotoOverlay src={photoOverlay}/>
                </S.PhotoHolder>
            </FlexWrap>
        </Container>
    </S.Main>
};