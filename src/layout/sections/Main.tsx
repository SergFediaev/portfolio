import React from 'react';
import styled from "styled-components";
import {Container} from "../../components/Container";
import {FlexWrap} from "../../components/FlexWrap";
import photo from "../../assets/images/photo.jpg"
import {theme} from "../styles/Theme";
import {Button} from "../../components/Button";

export const Main: React.FC = () => {
    return <StyledMain>
        <Container>
            <FlexWrap justify="space-around" align="center" wrap="wrap">
                <Info>
                    <Title>Sergei Fediaev</Title>
                    <Subtitle>Frontend developer</Subtitle>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus earum facilis optio sint
                        velit. Amet architecto aspernatur, assumenda dolorum eos, harum nisi officiis, perspiciatis
                        quaerat quam reiciendis repellat reprehenderit rerum?</p>
                    <Button as="a" href="https://hh.ru/resume/20f54a99ff0c4d7b5d0039ed1f435368756765">Resume ⤓</Button>
                </Info>
                <Photo src={photo}/>
            </FlexWrap>
        </Container>
    </StyledMain>
};

const StyledMain = styled.section`
    min-height: 100vh;
    display: flex;

    ${FlexWrap} {
        gap: ${theme.dimensions.itemSpace};
    }
`

const Info = styled.div`
    text-align: left;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: ${theme.dimensions.lineSpace};
`

const Photo = styled.img`
    max-width: 500px;
    width: 100%;
    border: 4px solid ${theme.colors.primaryAccent};
    border-radius: ${theme.dimensions.cardRadius};
    box-shadow: ${theme.shadows.card};
`

const Title = styled.h1`
    font-size: ${theme.dimensions.titleSize};
    color: ${theme.colors.primaryAccent};
`

const Subtitle = styled.h2`
    font-size: ${theme.dimensions.subtitleSize};
`