import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {theme} from "../../styles/Theme";
import {FlexWrap} from "../../../components/FlexWrap";
import {SectionTitle} from "../../../components/SectionTitle";
import {Link} from "../../../components/Link";
import {Button} from "../../../components/Button";

export const Contacts: React.FC = () => {
    return <StyledContacts id="contacts">
        <Container>
            <SectionTitle>Contacts</SectionTitle>
            <FlexWrap justify="center" align="center" direction="column">
                <Form>
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="Email"/>
                    <input type="text" placeholder="Subject"/>
                    <textarea placeholder="Message"></textarea>
                    <Button as="input" type="submit"/>
                </Form>
                <nav>
                    <Links>
                        <li>
                            <p>LinkedIn:</p>
                            <Link href="https://www.linkedin.com/in/sergfediaev">linkedin.com/in/SergFediaev</Link>
                        </li>
                        <li>
                            <p>GitHub:</p>
                            <Link href="https://github.com/SergFediaev">github.com/SergFediaev</Link>
                        </li>
                        <li>
                            <p>VK:</p>
                            <Link href="https://vk.com/sergfediaev">vk.com/SergFediaev</Link>
                        </li>
                        <li>
                            <p>Telegram:</p>
                            <Link href="https://t.me/SergFediaev">@SergFediaev</Link>
                        </li>
                        <li>
                            <p>Email:</p>
                            <Link href="mailto:sergfediaev@gmail.com">SergFediaev@gmail.com</Link>
                        </li>
                    </Links>
                </nav>
            </FlexWrap>
        </Container>
    </StyledContacts>
};

const StyledContacts = styled.section`
    ${FlexWrap} {
        gap: 200px;
    }

    & input,
    & textarea {
        font-size: ${theme.dimensions.textSize};
        padding: ${theme.dimensions.lineSpace};
        border-radius: ${theme.dimensions.buttonRadius};
        border: 2px solid;
        transition: ${theme.animations.defaultDuration};

        &:hover {
            border-color: ${theme.colors.primaryAccent};
        }
    }

    & textarea {
        resize: none;
        height: 200px;
    }
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: ${theme.dimensions.lineSpace};
    max-width: 800px;
    width: 100%;
`

const Links = styled.ul`
    max-width: 1000px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 100px;
`