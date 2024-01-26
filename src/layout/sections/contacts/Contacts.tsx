import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {theme} from "../../styles/Theme";
import {FlexWrap} from "../../../components/FlexWrap";
import {SectionTitle} from "../../../components/SectionTitle";

export const Contacts: React.FC = () => {
    return <StyledContacts>
        <Container>
            <SectionTitle>Contacts</SectionTitle>
            <FlexWrap justify="center">
                <Feedback>
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="Email"/>
                    <input type="text" placeholder="Subject"/>
                    <textarea placeholder="Message"></textarea>
                    <input type="submit"/>
                </Feedback>
                <Links>
                    <li>GitHub</li>
                    <li>VK</li>
                    <li>Telegram</li>
                    <li>Email</li>
                </Links>
            </FlexWrap>
        </Container>
    </StyledContacts>
};

const StyledContacts = styled.section`
    & input {
        font-size: 1rem;
        padding: ${theme.dimensions.lineSpace};
        border-radius: 10px;
        border: 2px solid;
        transition: ${theme.animations.defaultDuration};

        &:hover {
            border: 2px solid ${theme.colors.primaryAccent};
        }
    }

    & input[type=submit] {
        background-color: ${theme.colors.primaryAccent};
        color: #FFF;
        font-size: 1rem;
        cursor: pointer;

        &:hover {
            background-color: transparent;
            color: ${theme.colors.primaryAccent};
            border: 2px solid ${theme.colors.primaryAccent};
        }
    }

    & textarea {
        font-size: 1rem;
        padding: ${theme.dimensions.lineSpace};
        border-radius: 10px;
        border: 2px solid;
        resize: none;
        height: 200px;
        transition: ${theme.animations.defaultDuration};

        &:hover {
            border: 2px solid ${theme.colors.primaryAccent};
        }
    }
`

const Feedback = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${theme.dimensions.lineSpace};
    max-width: 800px;
    width: 100%;
`

const Links = styled.ul`
    display: flex;
    flex-direction: column;
    gap: ${theme.dimensions.lineSpace};
`