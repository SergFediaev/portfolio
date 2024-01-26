import React from 'react';
import styled from "styled-components";
import preview from "../../../assets/images/project.jpg"
import {theme} from "../../styles/Theme";
import {Link} from "../../../components/Link";

export const Project: React.FC = () => {
    return <StyledProject>
        <Preview src={preview}/>
        <Info>
            <Title>Project title</Title>
            <Description>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur at atque quod repellat
                voluptate. Adipisci asperiores aspernatur dolorem expedita illo libero nostrum provident sapiente
                veritatis, vitae. Alias natus porro vitae?</Description>
            <Link href="#">More</Link>
        </Info>
    </StyledProject>
};

const StyledProject = styled.div`
    max-width: 500px;
    border-radius: ${theme.dimensions.cardRadius};
    overflow-y: hidden;
    background-color: ${theme.colors.itemSurface};
    box-shadow: ${theme.shadows.card};
`

const Preview = styled.img`
    width: 100%;
    display: block;
`

const Title = styled.h2`
    font-size: ${theme.dimensions.subtitleSize};
`

const Description = styled.p`
    margin: ${theme.dimensions.lineSpace} 0;
`

const Info = styled.div`
    padding: ${theme.dimensions.itemSpace};
`