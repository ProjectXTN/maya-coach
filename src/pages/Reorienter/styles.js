import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    align-items: center;
    justify-content: center;
    width: 80%;

    @media screen and (width < 1200px) {
        margin-top: -10%;
    }


    @media screen and (width < 750px) {
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

    @media screen and (width < 1200px) {
        margin-top: 0%;
        height: 40vh;
    }


    @media screen and (width < 750px) {
        margin-top: 3rem;
        width: 100%;
        height: 80vh;

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

    @media screen and (width < 1200px) {
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
            margin-top: 0%;
            margin-left: 70%;

        }
    }


    @media screen and (width < 750px) {
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

    @media screen and (width < 1200px) {
        height: 70%;

        p{
            height: 250px;
            width: 640px;
            font-size: 16px;
            padding: 30px;
        }
    }


    @media screen and (width < 750px) {
        height: 100%;
        margin-top: 3rem;
        margin-left: -3rem;

        p{
            margin-left: 4rem;
            height: 60%;
            width: 80%;
            font-size: 14px;
            padding: 20px;
        }

        li{
            padding-top: 5px;
        }
    }
`