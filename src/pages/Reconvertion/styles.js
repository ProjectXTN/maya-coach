import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
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