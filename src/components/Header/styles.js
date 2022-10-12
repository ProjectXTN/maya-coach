import styled from "styled-components";


export const LogoImage = styled.img`
    width: 25%;


    @media screen and (width <= 960px) {
        width: 15%;
    }

    @media screen and (width <= 750px) {

    }
`

export const ContainerGlobal = styled.div`
    background-color: #DEB887;
    
`

export const LinksA = styled.a`
    color: #FFF;
    text-decoration: none;
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;


    &:hover {
        color: #111;
        text-decoration: underline;
    }

    @media screen and (width <= 1200px) {
        font-size: 10px;
    }

    @media screen and (width <= 960px) {
        font-size: 8px;
        text-align: center;
        margin-bottom: 5px;
    }

    @media screen and (width <= 750px) {

    }
`

export const LinksOffCanvas = styled.a`
    color: white;


`