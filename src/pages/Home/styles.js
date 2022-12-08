import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: 100vh;
    font-size: 35px;

    @media screen and (width <= 1200px) {

    }

    @media screen and (width <= 960px) {
        font-size: 22px;
    }

    @media screen and (width <= 750px) {
        font-size: 18px;
        margin-left: 3rem;
    }
`

export const Wrapper = styled.div`
    font-size: 16px;
`

export const ContainerWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    max-height: 1400px;
    justify-content: center;
    background-color: #DEB887;
    width: 100%;
    padding: 40px 0;


    @media screen and (width <= 1200px) {
        div{
            width:55%;
            justify-content: center;
            margin-right: 1rem;
        }
    }

    @media screen and (width <= 960px) {
        div{
            width:49%;
        }
    }

    @media screen and (width <= 750px) {
        flex-direction: column;

        div{
            width:45%;
        }
    }
`
export const TextDescription = styled.div`
    color: #111;
    font-size: 18px;
    line-height: 1.76em;
    width: 40%;
    text-align: justify;
    font-weight: 400;

    h2{
        font-size: 40px;
        margin-bottom: 2rem;
    }

    @media screen and (width <= 1200px) {
        font-size: 14px;
        margin-right: 10px;
    }

    @media screen and (width <=  960px) {
        font-size: 14px;
        width: 40%;

        h2{
            font-size: 25px;
            margin-bottom: 2rem;
            text-align: center;
        }

        h3{
            text-align: center;
        }
    }

    @media screen and (width <= 750px) {
        font-size: 12px;
        text-align: justify;
    }
`

export const ImageProfile = styled.img`
    border-radius: 50%;
    width: 70%;

    @media screen and (width <= 1200px) {
        div{
            width:55%;
        }
    }

`


export const  ContainerAvis = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    color: #111;
    align-items: center;
    justify-content: center;
    background-color: 	#DEB887;
    padding-bottom: 30px;


    h2{
        font-size: 42px;
        font-weight: 500;
        margin-bottom: 15px;
        margin-top: 25px;
    }

    @media screen and (width <= 750px) {
        height: 100%;
        padding-bottom: 25px;

        h2{
            width: 90%;
            font-size: 20px;
            margin-top: 25px;
            text-align: center;
        }
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

    @media screen and (width <= 1200px) {
        margin-left: 0;

    }

    @media screen and (width <=  960px) {
        img{
            height: 300px;
        }
    
        p{
            height: 850px;
            width: 350px;
            font-size: 14px;
            padding: 30px;
            letter-spacing: 1.5px;
        }
        
    }

    @media screen and (width <= 750px) {
        flex-direction: column;


        img{
            height: 200px;
            margin-bottom: 1rem;
            border-radius: 25px;
        }
    
        p{
            height: 700px;
            width: 220px;
            font-size: 10px;
            padding: 10px;
            letter-spacing: 1.5px;
        }
    }
`

export const TextAvis2 = styled.div`
display: flex;
margin-top: 2rem;


p{
    height: 450px;
    width: 950px;
    font-size: 18px;
    font-weight: 400;
    padding: 30px;
    background-color: #FFF;
    box-shadow: 20px 20px 5px #111;
    letter-spacing: 1.5px;

}


@media screen and (width <=  960px) {
    img{
        height: 300px;
    }

    p{
        height: 850px;
        width: 350px;
        font-size: 14px;
        padding: 30px;
        letter-spacing: 1.5px;
    }
    
}

@media screen and (width <= 750px) {
    flex-direction: column;


    img{
        height: 200px;
        margin-bottom: 1rem;
        border-radius: 25px;
    }

    p{
        height: 700px;
        width: 220px;
        font-size: 10px;
        padding: 10px;
        letter-spacing: 1.5px;
    }
}
`

export const BtnVoir = styled.button`
        height: 50px;
        width: 120px;
        margin-top: 1rem;
        background-color: rgba(180, 180, 180, 0.4);
        border-radius: 25px;

        &:hover{
            background-color: #FFFFFF;
            color: black ;
        }

        span{
            margin-left: -10px;
            margin-top: -5px;
        }
`