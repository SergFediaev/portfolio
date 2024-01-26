import React from 'react';
import styled from "styled-components";
import preview from "../../../assets/images/project.jpg"
import {theme} from "../../styles/Theme";

export const Project: React.FC = () => {
    return <StyledProject>
        <Preview src={preview}/>
        <Title>Project title</Title>
        <Description>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur at atque quod repellat
            voluptate. Adipisci asperiores aspernatur dolorem expedita illo libero nostrum provident sapiente
            veritatis, vitae. Alias natus porro vitae?</Description>
        <a href="#">More</a>
    </StyledProject>
};

const StyledProject = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${theme.dimensions.lineSpace};
    max-width: 500px;
    background-color: lightblue;
`

const Preview = styled.img`
    width: 100%;
`

const Title = styled.h2`

`

const Description = styled.p`

`