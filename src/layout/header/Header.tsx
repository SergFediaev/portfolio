import React from 'react';
import styled from "styled-components";
import {Container} from "../../components/Container";
import {FlexWrap} from "../../components/FlexWrap";
import {theme} from "../styles/Theme";

export const Header: React.FC = () => {
    return <StyledHeader>
        <Container>
            <FlexWrap justify="flex-end">
                <StyledMenu>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contacts">Contacts</a></li>
                </StyledMenu>
            </FlexWrap>
        </Container>
    </StyledHeader>
};

const StyledHeader = styled.div`
    background-color: coral;
    position: fixed;
    right: 0;
    left: 0;
    padding: ${theme.dimensions.lineSpace} 0;
`

const StyledMenu = styled.ul`
    display: flex;
    gap: ${theme.dimensions.lineSpace};
    background-color: aqua;
`