import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;

    @media screen and (width < 1200px) {

    }

    @media screen and (width < 960px) {

    }

    @media screen and (width < 750px) {

    }
`

export const Row = styled.div`
    width: 100%;
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
        text-align: justify;
    }

    img{
        width: 55%;
        margin-left: 90%;
        border-radius: 155px;
    }

    @media screen and (width < 1200px) {
        width: 100%;

        h1{
            width:40%;
            font-size: 40px;
            text-align: start;
            margin: 2rem;
    
        }
    
        p{
            width: 100%;
            margin-left: 38%;
            font-size: 18px;
            text-align: justify;
        }
    
        img{
            width: 60%;
            margin-left: 80%;
        }
    }

    @media screen and (width < 960px) {
        img{
            width: 70%;
            margin-left: 25%;
        }   
    }

    @media screen and (width < 750px) {
        h1{
            width:40%;
            font-size: 24px;
            text-align: start;
            margin: 2rem;
    
        }
    
        p{
            width: 100%;
            margin-left: 10%;
            font-size: 16px;
            text-align: justify;
        }
    
        img{
            width: 70%;
            margin-left: 15%;
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
        margin-top: -15%;
        text-align: justify;
    }

    @media screen and (width < 1200px) {
        margin-top: 2rem;
    
    
        p{
            height: 420px;
            width: 650px;
            font-size: 20px;
            font-weight: 400;
            padding: 30px;
            margin-top: 0%;
        }

    }

    @media screen and (width < 960px) {
        margin-top: 2rem;
        margin-left: 17%;
    
    
        p{
            height: 540px;
            width: 350px;
            font-size: 16px;
            font-weight: 400;
            padding: 30px;
            margin-top: 0%;
        }
    }

    @media screen and (width < 750px) {

    }
`

export const BgRow = styled.div`
    width: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    width: 80%;

    img{
        width: 68%;
        margin-top: -40%;
        margin-left: 62%;
        opacity: 90%;
        border-radius: 155px;
    }
`