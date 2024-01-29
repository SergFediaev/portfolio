import styled from "styled-components";
import {theme} from "../../styles/Theme";

const Header = styled.div`
    position: sticky;
    top: 0;
    padding: ${theme.dimensions.itemSpace} 0;
    background-color: rgba(255, 255, 255, .9);
    backdrop-filter: blur(5px);

    @media ${theme.media.mobile} {
        display: none;
    }
`

const Menu = styled.ul`
    display: flex;
    gap: 100px;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

export const S = {
    Header,
    Menu,
}