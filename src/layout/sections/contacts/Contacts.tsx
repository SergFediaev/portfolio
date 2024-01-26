import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {theme} from "../../styles/Theme";

export const Contacts: React.FC = () => {
    return <div>
        <Container>
            <StyledContacts>
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
            </StyledContacts>
        </Container>
    </div>
};

const StyledContacts = styled.div`
    padding: 100px 0;
    display: flex;
    gap: ${theme.dimensions.itemSpace};
    justify-content: space-between;
    background-color: pink;
`

const Feedback = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${theme.dimensions.lineSpace};
    max-width: 600px;
    width: 100%;
`

const Links = styled.ul`
    display: flex;
    flex-direction: column;
    gap: ${theme.dimensions.lineSpace};
`