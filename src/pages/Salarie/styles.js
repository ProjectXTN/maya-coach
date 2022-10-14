import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;

    @media screen and (width <= 1200px) {

    }

    @media screen and (width <= 960px) {

    }

    @media screen and (width <= 750px) {

    }
`

export const Row = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    width: 80%;


    h1{
        width:40%;
        color: #111;
        font-size: 50px;
        font-weight: 700;
        text-align: start;
        margin: 2rem;

    }

    p{
        width: 55%;
        color: #111;
        margin-left: 30%;
        font-size: 18px;
        font-weight: 500;
        letter-spacing: 1px;
        z-index: 2;
        font-weight: 500;
        text-align: justify;
    }

    img{
        width: 80%;
        margin-left: 80%;
        border-radius: 100px;
    }

    @media screen and (width <= 1200px) {
        width: 80%;
    
    
        h1{
            width:40%;
            font-size: 50px;
            font-weight: 700;
            text-align: start;
            margin: 2rem;
        }
    
        p{
            width: auto;
            margin-left: 30%;
            font-size: 18px;
            text-align: justify;
        }
    
        img{
            width: 90%;
            margin-left: 80%;
        }
    }

    @media screen and (width <= 960px) {
        h1{
            width:40%;
            font-size: 40px;
            font-weight: 700;
            text-align: start;
            margin: 2rem;
        }
    
        p{
            font-size: 14px;

        }
    
        img{
            width: 90%;
            margin-left: 80%;
        }
    }

    @media screen and (width <= 750px) {
        width: auto;


        h1{
            width:auto;
            font-size: 40px;
            font-weight: 700;
            text-align: start;
            margin: 2rem;
        }
    
        p{
            font-size: 14px;
            margin-left: 10%;

        }
    
        img{
            margin-left: 50%;
        }
    }
`

export const TextOrientation = styled.div`
    display: flex;
    margin-top: 2rem;


    p{
        color: #111;
        height: 420px;
        width: 800px;
        font-size: 22px;
        font-weight: 400;
        padding: 30px;
        background-color: #FFF;
        border: 1px solid #111;
        box-shadow: 20px 20px 5px #111;
        letter-spacing: 1.7px;
        margin-top: -5rem;
        margin-left: -10%;
        text-align: justify;
    }

    @media screen and (width <= 1200px) {
        p{

            height: auto;
            width: auto;
            font-size: 20px;
            padding: 30px;
            margin-top: 0rem;
            margin-left: 10%;
        }
    }

    @media screen and (width <= 960px) {
        p{

            height: auto;
            width: auto;
            font-size: 14px;
            padding: 30px;
            margin-top: 0rem;
            margin-left: 10%;
        }
    }

    @media screen and (width <= 750px) {

    }
`
