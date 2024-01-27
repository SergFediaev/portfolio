import React from 'react';
import {Container} from "../../../components/Container";
import {FlexWrap} from "../../../components/FlexWrap";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {S} from './Contacts_Styles';
import {Links} from "./Links";

export const Contacts: React.FC = () => {
    return <S.Contacts id="contacts">
        <Container>
            <SectionTitle>Contacts</SectionTitle>
            <FlexWrap justify="center" align="center" direction="column">
                <S.Form>
                    <S.Field type="text" placeholder="Name" required/>
                    <S.Field type="text" placeholder="Email" required/>
                    <S.Field type="text" placeholder="Subject" required/>
                    <S.Field as={S.Textarea} placeholder="Message" required/>
                    <Button as="input" type="submit" value="Submit"/>
                </S.Form>
                <Links/>
            </FlexWrap>
        </Container>
    </S.Contacts>
};