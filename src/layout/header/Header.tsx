import React from 'react';
import {Container} from "../../components/Container";
import {FlexWrap} from "../../components/FlexWrap";
import {Menu} from "./Menu";
import {S} from "./Header_Styles"

export const Header: React.FC = () => {
    return <S.Header>
        <Container>
            <FlexWrap justify="center">
                <Menu/>
            </FlexWrap>
        </Container>
    </S.Header>
};