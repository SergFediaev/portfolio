import React from 'react';
import styled from "styled-components";
import {Container} from "../../components/Container";
import {FlexWrap} from "../../components/FlexWrap";
import {theme} from "../styles/Theme";
import {Link} from "../../components/Link";

export const Header: React.FC = () => {
    return <StyledHeader>
        <Container>
            <FlexWrap justify="center">
                <nav>
                    <StyledMenu>
                        <li><Link href="https://hh.ru/resume/20f54a99ff0c4d7b5d0039ed1f435368756765">Resume ⤓</Link>
                        </li>
                        <li><Link href={"#projects"}>Projects</Link></li>
                        <li><Link href={"#skills"}>Skills</Link></li>
                        <li><Link href={"#contacts"}>Contacts</Link></li>
                    </StyledMenu>
                </nav>
            </FlexWrap>
        </Container>
    </StyledHeader>
};

const StyledHeader = styled.div`
    position: sticky;
    top: 0;
    padding: ${theme.dimensions.itemSpace} 0;
    background-color: rgba(255, 255, 255, .9);
    backdrop-filter: blur(5px);
`

const StyledMenu = styled.ul`
    display: flex;
    gap: 100px;
    flex-wrap: wrap;
    justify-content: space-evenly;
`