import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    color: #111;
    align-items: center;

    @media screen and (width <= 1200px) {

    }

    @media screen and (width <= 960px) {

    }

    @media screen and (width <= 750px) {

    }

`

export const Row = styled.div`

    h1 {
        margin-top: 5rem;
        font-size: 50px;
        margin-bottom: 5rem;
        font-weight: 700;
    }

    h2 {
        margin-bottom: 3rem;
        font-size: 36px;
        font-weight: 700;
    }

    @media screen and (width <= 1200px) {

    }

    @media screen and (width <= 960px) {

    }

    @media screen and (width <= 750px) {
        h1 {
            font-size: 40px;

        }
    
        h2 {

            font-size: 22px;
        }
    }
`