import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: 100vh;
`

export const TextDescription = styled.div`
    color: #111;
    font-size: 18px;
    line-height: 1.76em;
    width: 40%;
    text-align: start;
    font-weight: 400;

    h2{
        font-size: 40px;
        margin-bottom: 2rem;
    }
`

export const ContainerWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 600px;
    justify-content: center;
    background-color: #DEB887;
    width: 100%
`

export const TextWrapper = styled.div`
    color: #111;
    font-size: 20px;
    width: 40%;
    text-align: center;
`

export const ImageProfile = styled.img`
    border-radius: 50%;
    width: 70%;
`

export const  ContainerAvis = styled.div`
    display: flex;
    flex-direction: column;
    height: 120vh;
    color: #111;
    align-items: center;
    justify-content: center;
    background-color: 	#DEB887;


    h2{
        font-size: 42px;
        font-weight: 500;
        margin-bottom: 15px;
    }
`

export const TextAvis = styled.div`
    display: flex;
    margin-left: -25%;
    margin-top: 2rem;

    img{
        height: 500px;
    }

    p{
        height: 800px;
        width: 550px;
        font-size: 18px;
        font-weight: 400;
        padding: 30px;
        background-color: #FFF;
        box-shadow: 20px 20px 5px #111;
        letter-spacing: 1.5px;
    }
`