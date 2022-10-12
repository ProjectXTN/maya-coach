import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    align-items: center;
    justify-content: center;
    width: 80%;

`

export const Row = styled.div`
    width: 100%;
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

    p{
        width: 55%;
        color: #111;
        margin-left: 30%;
        font-size: 18px;
        font-weight: 500;
        letter-spacing: 1px;
        text-align: justify;
        z-index: 2;
    }

    img{
        width: 70%;
        margin-top: -11%;
        margin-left: 90%;
        opacity: 90%;
        border-radius: 155px;
    }

    
`

export const TextOrientation = styled.div`
    display: flex;
    height: 100vh;
    margin-top: 2rem;


    p{
        color: #111;
        height: 310px;
        width: 800px;
        font-size: 24px;
        font-weight: 400;
        padding: 30px;
        background-color: #FFF;
        border: 1px solid #111;
        box-shadow: 20px 20px 5px #111;
        letter-spacing: 1.5px;
        text-align: justify;
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