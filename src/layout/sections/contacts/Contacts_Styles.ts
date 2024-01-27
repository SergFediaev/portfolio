import styled from "styled-components";
import {FlexWrap} from "../../../components/FlexWrap";
import {theme} from "../../../styles/Theme";

const Contacts = styled.section`
    ${FlexWrap} {
        gap: 200px;
    }
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: ${theme.dimensions.lineSpace};
    max-width: 800px;
    width: 100%;
`

const Field = styled.input`
    font-size: ${theme.dimensions.textSize};
    padding: ${theme.dimensions.lineSpace};
    border-radius: ${theme.dimensions.buttonRadius};
    border: 2px solid;
    transition: ${theme.animations.defaultDuration};

    &:hover {
        border-color: ${theme.colors.primaryAccent};
    }
`

const Textarea = styled.textarea`
    resize: none;
    height: 200px;
`

const Links = styled.ul`
    max-width: 1000px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 100px;
`

export const S = {
    Contacts,
    Form,
    Field,
    Textarea,
    Links,
}