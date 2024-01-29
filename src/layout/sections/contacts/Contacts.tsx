import React, {ElementRef, useRef} from 'react';
import {Container} from "../../../components/Container";
import {FlexWrap} from "../../../components/FlexWrap";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {S} from './Contacts_Styles';
import {Links} from "./Links";
import emailjs from '@emailjs/browser';

export const Contacts: React.FC = () => {
    const form = useRef<ElementRef<"form">>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if (!form.current) return;

        emailjs.sendForm('service_n3nrak7', 'template_m7ilcmb', form.current, 'qp-wrSoJJNl8UcFFy')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return <S.Contacts id="contacts">
        <Container>
            <SectionTitle>Contacts</SectionTitle>
            <FlexWrap justify="center" align="center" direction="column">
                <S.Form ref={form} onSubmit={sendEmail}>
                    <S.Field type="text" placeholder="Name" required name="user_name"/>
                    <S.Field type="text" placeholder="Email" required name="email"/>
                    <S.Field type="text" placeholder="Subject" name="subject"/>
                    <S.Field as={S.Textarea} placeholder="Message" required name="message"/>
                    <Button as="input" type="submit" value="Submit"/>
                </S.Form>
                <Links/>
            </FlexWrap>
        </Container>
    </S.Contacts>
};