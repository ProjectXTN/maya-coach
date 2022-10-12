import styled, { css } from "styled-components";


export const ContainerFooter = styled.footer`

    background-color: #111;
    display: flex;
    height: 250px;
    justify-content: space-evenly;
    align-items: center;
    padding-bottom: 50px;

    
    @media screen and (width <= 750px) {
        flex-direction: column;
        height: 100%;
        align-items: center;
    }
`

export const Row = styled.div`
    margin-top: 4%;
    font-size: 16px;
    text-align:center;

`

export const LinksA = styled.a`
    text-align:center;
    text-decoration: none;
    color: #FFF;
    margin-bottom: 5px;
    font-size: 12px;
    cursor: pointer;

    &:hover {
        color: #B8860B;
}
`

export const ImageLogo = styled.img`
    width: 35%;
`

export const Icons = styled.div`
    margin-top: 4%;
    font-size: 16px;
    text-align: start;

    h4{
        text-align: start;
    }

    p{
        text-align: start;
    }

    a{
        text-align:start;
        text-decoration: none;
        color: #FFF;
        margin-right: 1rem;
        font-size: 32px;

        &:hover{
            color: #B8860B;
        }
    }

    
    @media screen and (width <= 750px) {
        text-align: center;

        h4{
            text-align: center;
        }

        p{
            text-align: center;
        }
    
        a{
            text-align:center;
            text-decoration: none;
            color: #FFF;
            margin-right: 1rem;
            font-size: 32px;
    
            &:hover{
                color: #B8860B;
            }
        }
    }

`


