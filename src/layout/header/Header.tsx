import React from 'react';
import styled from "styled-components";
import {Container} from "../../components/Container";
import {FlexWrap} from "../../components/FlexWrap";
import {theme} from "../styles/Theme";
import {Link} from "../../components/Link";

export const Header: React.FC = () => {
    return <StyledHeader>
        <Container>
            <FlexWrap justify="flex-end">
                <StyledMenu>
                    <li><Link href="#">CV</Link></li>
                    <li><Link href="#">Projects</Link></li>
                    <li><Link href="#">Skills</Link></li>
                    <li><Link href="#">Contacts</Link></li>
                </StyledMenu>
            </FlexWrap>
        </Container>
    </StyledHeader>
};

const StyledHeader = styled.div`
    position: fixed;
    right: 0;
    left: 0;
    padding: ${theme.dimensions.itemSpace} 0;
    backdrop-filter: blur(2px);
`

const StyledMenu = styled.ul`
    display: flex;
    gap: 100px;
    flex-wrap: wrap;
    justify-content: space-evenly;
`