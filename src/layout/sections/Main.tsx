import React from 'react';
import styled from "styled-components";
import {Container} from "../../components/Container";
import {FlexWrap} from "../../components/FlexWrap";
import photo from "../../assets/images/photo.jpg"
import {theme} from "../styles/Theme";

export const Main: React.FC = () => {
    return <StyledMain>
        <Container>
            <FlexWrap justify="space-around" align="center" wrap="wrap">
                <About>
                    <Title>Sergei Fediaev</Title>
                    <Subtitle>Frontend developer</Subtitle>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus earum facilis optio sint
                        velit. Amet architecto aspernatur, assumenda dolorum eos, harum nisi officiis, perspiciatis
                        quaerat quam reiciendis repellat reprehenderit rerum?</p>
                </About>
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

const About = styled.div`
    text-align: left;
    max-width: 500px;
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
    margin: ${theme.dimensions.lineSpace} 0;
`