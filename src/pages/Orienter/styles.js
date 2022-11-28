import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    align-items: center;
    justify-content: center;
    width: 80%;

    @media screen and (width <= 1200px) {
        margin-top: -10%;
    }


    @media screen and (width <= 750px) {
        margin-top: 3rem;
        width: 100%;

    }

`

export const Container2 = styled.div`
    display: flex;
    flex-direction: column;
    height: 50vh;
    align-items: center;
    justify-content: center;
    width: 80%;

    @media screen and (width <= 1200px) {
        margin-top: -10%;
    }


    @media screen and (width <= 750px) {
        margin-top: 3rem;
        width: 100%;

    }
`

export const Row = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    width: 80%;


    h1{
        width:100%;
        color: #111;
        font-size: 50px;
        font-weight: 700;
        text-align: center;
        margin: 2rem;

    }

    h2{
        width:100%;
        color: #111;
        font-size: 40px;
        font-weight: 700;
        text-align: center;
        margin: 2rem;
    }

    p{
        width: 55%;
        color: #111;
        margin-left: 40%;
        font-size: 18px;
        font-weight: 500;
        letter-spacing: 1px;
        text-align: justify;
        z-index: 2;
    }

    img{
        width: 70%;
        margin-top: -0%;
        margin-left: 100%;
        opacity: 90%;
        border-radius: 155px;
    }

    @media screen and (width <= 1200px) {
        width: 100%;

        h1{
            width:100%;
            font-size: 40px;
            font-weight: 700;
        }

        p{
            width: 65%;
            margin-left: 0%;
            font-size: 14px;

        }

        img{
            width: 60%;
            margin-top: -11%;
            margin-left: 80%;

        }
    }


    @media screen and (width <= 750px) {
        width: 100%;
        

        h1{
            width:100%;
            font-size: 40px;
            font-weight: 700;

        }

        p{
            margin-left: 0%;
            font-size: 12px;
            letter-spacing: 1px;
            text-align: justify;
        }

        img{
            width: 80%;
            margin-top: 5%;
            margin-left: 0%;
            
        }
    }
`

export const TextOrientation = styled.div`
    display: flex;
    height: 100vh;
    margin-top: 2rem;


    p{
        color: #111;
        height: 300px;
        width: 850px;
        font-size: 24px;
        font-weight: 400;
        padding: 30px;
        background-color: #FFF;
        border: 1px solid #111;
        box-shadow: 20px 20px 5px #111;
        letter-spacing: 1.5px;
        text-align: justify;
        margin-left: 3rem;
    }

    @media screen and (width <= 1200px) {
        height: 70%;

        p{
            height: 200px;
            width: 600px;
            font-size: 16px;
            padding: 30px;
        }
    }


    @media screen and (width <= 750px) {
        height: 50%;
        margin-top: 3rem;
        margin-left: -3rem;

        p{
            height: 300px;
            width: 300px;
            font-size: 14px;
            padding: 30px;
        }
    }
`

export const BgRow = styled.div`
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

    @media screen and (width <= 1200px) {


        img{
            width: 80%;
            margin-top: -50%;
            margin-left: 62%;

        }
    }

    @media screen and (width <= 960px) {
        img{
            width: 100%;
            margin-top: -63%;
            margin-left: 62%;

        }
    }

    @media screen and (width <= 750px) {
        display:flex;
        justify-content: center;
        align-items: center;
        width: 100%;

        img{
            width: 85%;
            margin-top: 0;
            margin-left: 0;
            opacity: 100%;
        }

    }
`