import styled from "styled-components";

export const ContentLogin = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ContainerLogin = styled.div`
    width: 1280px;
    height: 580px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ContainerForm = styled.form`
    width: 640px;
    height: 580px;
    display: flex;

    justify-content: center;
    align-items: center;
    flex-direction: column;
 
    input{
        width: 300px;
        height: 50px;
        padding: 1rem;
        background-color: transparent;
        border-radius: 8px;
        border: 2px solid white;
        color: white;
   
    }

    button{
        width: 300px;
        height: 50px;
        padding: 1rem;
        background-color: transparent;
        border-radius: 8px;
        border: 2px solid white;
        color: white;
        cursor: pointer;
    }

    input[type=password]{
        margin-top: 0.7rem;
        margin-bottom: 1rem;
 
    }

    img{
        width: 50%;
        height: 50%;
        border-radius: 10%;
        margin-bottom: 5rem;

    }
`
export const ContainerAboutUs = styled.div`
    width: 640px;
    height: 580px;
    display: flex;
    flex-direction: column;
    color: white;
    align-items: center;

    div{
        width: inherit;
        height: 70%;
        justify-content: center;
        align-items: center;
        display: flex;
        text-align: center;
        line-height: 2rem;
        font-weight: 500;
    }

    img{
        width: 47%;
        height: 50%;
        border-radius: 10%;
    }
`
export const MakeLogin = styled.div`
    width: 1280px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    
`
