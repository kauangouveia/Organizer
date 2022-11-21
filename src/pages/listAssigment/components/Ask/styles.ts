import styled from "styled-components";


export const ContainerList = styled.div`
    width: 1280px;
    height: 100px;
    background-color: #D9D9D9;
    border-radius: 16px;
    display: flex;
    margin-bottom: 1rem;
    margin-right: 1rem;
    text-align: center;
    color: black;
`

type PriorityData = {
    priority: string;
}


export const Priority = styled.div<PriorityData>`
    width: 250px;
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.priority === 'ALTA' ? 'red' : props.priority === 'MEDIA' ? 'blue' : 'green'};
`
export const OurAsk = styled.div`
    width: 520px;
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const DateAsk = styled.div`
    width: 250px;
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;

`
export const ActionsAsk = styled.div`
    width: 260px;
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    
    :last-child{
        width: 20%;
        cursor: pointer;
    }
`