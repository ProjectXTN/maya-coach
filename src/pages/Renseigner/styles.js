import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;

    @media screen and (width < 1200px) {
        margin: auto;
    }

    @media screen and (width < 960px) {

    }

    @media screen and (width < 750px) {

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
        width: 65%;
        height: auto;
        color: #111;
        margin-left: 30%;
        font-size: 20px;
        letter-spacing: 1px;
        z-index: 2;
        font-weight: 500;
        border: 1px solid #111;
        box-shadow: 20px 20px 5px #111;
        letter-spacing: 1.7px;
        margin-top: 1rem;
        background-color: #FFF;
        padding: 30px;
        text-align: justify;
    }

    img{
        width: 70%;
        margin-left: 80%;
        border-radius: 100px;
        margin-top: -8%;
    }

    @media screen and (width < 1200px) {
        display:flex;
        width: 100%;
    
        h1{
            width:40%;
            font-size: 50px;
            margin: 2rem;
    
        }
    
        p{
            width: 70%;
            height: auto;
            margin-left: 30%;
            font-size: 20px;
            letter-spacing: 1px;
            letter-spacing: 1.7px;
            margin-top: 1rem;
            padding: 30px;
        }
    
        img{
            margin-left: -32%;
            margin-top: -8%;
        }
    }

    @media screen and (width < 960px) {

    }

    @media screen and (width < 750px) {
        h1{
            font-size: 40px;
        }
    
        p{
            font-size: 16px;
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
        margin-top: 5rem;
        text-align: justify;
    }

    @media screen and (width < 1200px) {

    }

    @media screen and (width < 960px) {
        p{
            height: 420px;
            width: auto;
            font-size: 20
            px;
            font-weight: 400;
            padding: 30px;
            background-color: #FFF;
            margin-top: 5rem;
        }
    }

    @media screen and (width < 750px) {
        p{
            height: auto;
            width: auto;
            font-size: 16px;
            font-weight: 400;
            padding: 30px;
            background-color: #FFF;
            margin-top: 5rem;
        }
    }
`
