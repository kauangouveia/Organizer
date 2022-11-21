import styled from "styled-components";


export const ListAssignmentContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ContentList = styled.div`
    width: 1280px;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

  
`
export const ContentHeader = styled.header`
    width: 1280px;
    height: 100px;
    display: flex;
    margin-bottom: 1rem;
    img{
        width: 9%;
        height: inherit;
    }
`
export const ContentActions = styled.div`
    width: 1280px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content:flex-end;
    align-items: flex-end;
        button{
        width: 200px;
        height: 40px;
        margin-bottom: 1rem;
        border-radius: 8px;
        background-color: transparent;
        border: 2px solid white;
        color: white;
    }
    
    button{
        cursor: pointer;
    }

`
export const Actions = styled.div`
    width: 1280px;
    height: 45px;
    align-items: center;
    padding: 1rem;
    display: flex;
    border-radius: 10px;
    background-color: transparent;
    border: 2px solid white;
    justify-content: space-between;
    color: white;
`
export const List = styled.div`
    width: auto;
    height: 500px;
    margin-top: 2rem;
    display: flex;
    border-radius: 10px;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: white;
`
export const ListContent = styled.div`
    width: inherit;
    height: auto;
    overflow: auto;
    flex-direction: column;
    display: flex;
`