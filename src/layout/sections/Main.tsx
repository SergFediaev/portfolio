import React from 'react';
import styled from "styled-components";
import {Container} from "../../components/Container";
import {FlexWrap} from "../../components/FlexWrap";
import photo from "../../assets/images/photo.jpg"

export const Main: React.FC = () => {
    return <StyledMain>
        <Container>
            <FlexWrap align="center">
                <About>
                    <h1>Sergei Fediaev</h1>
                    <h2>Fronted developer</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus earum facilis optio sint
                        velit. Amet architecto aspernatur, assumenda dolorum eos, harum nisi officiis, perspiciatis
                        quaerat quam reiciendis repellat reprehenderit rerum?</p>
                </About>
                <Photo src={photo}/>
            </FlexWrap>
        </Container>
    </StyledMain>
};

const StyledMain = styled.div`
    height: 100vh;
    background-color: greenyellow;
    display: flex;
`

const About = styled.div`
`

const Photo = styled.img`
    max-width: 400px;
`

