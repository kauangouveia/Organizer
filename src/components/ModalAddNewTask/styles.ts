import styled from 'styled-components';

export const ContainerModal = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    color: white;
`
export const ContentModal = styled.form`
    width: 700px;
    height: 40vh;
    background-color: #232222;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 3rem;


    div{
        display: flex;
        gap: 2rem;
    }

`
export const Input = styled.input`
    width: 300px;
    height: 40px;
    border-radius: 8px;
    padding: 1rem;
`
export const Select = styled.select`
    width: 300px;
    height: 40px;
    border-radius: 8px;
    padding-left: 1rem;
`
export const Button = styled.button`
    width: 300px;
    height: 40px;
    border-radius: 8px;
    background-color: transparent;
    border: solid 2px white;
    color: white;
    cursor: pointer;
`