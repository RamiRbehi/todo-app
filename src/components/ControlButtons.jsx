import React, { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from './ThemeContext';

const ControlButtons = ({ tasks, filter, clearCompleted }) => {
    const {isDarkMode} = useContext(ThemeContext);
    const activeTasks = Array.isArray(tasks) ? tasks.filter((task) => !task.isCompleted) : []
    const lightTheme = {
        colorHover: "hsl(235, 24%, 19%)",
        backgroundColor: "hsl(0, 0%, 98%)",
    }

    const darkTheme = {
        colorHover: "hsl(236, 33%, 92%)",
        backgroundColor: "hsl(235, 24%, 19%)",
    }

  return (
    <>
    <Container theme={{...lightTheme, ...(isDarkMode && darkTheme)}}>
        <NumberItems>{activeTasks.length} items left</NumberItems>
        <CenterDiv>
            <All onClick={() => filter("all")}>All</All>
            <Active onClick={() => filter("active")}>Active</Active>
            <Completed onClick={() => filter("completed")}>Completed</Completed>
        </CenterDiv>
        <ClearCompleted onClick={clearCompleted}>Clear Completed</ClearCompleted>
    </Container>
        <CenterMobileDiv>
            <All onClick={() => filter("all")}>All</All>
            <Active onClick={() => filter("active")}>Active</Active>
            <Completed onClick={() => filter("completed")}>Completed</Completed>
        </CenterMobileDiv>
    </>
  )
}

const Container = styled.div`
    width: 40vw;
    padding: 20px 0;
    border-radius: 5px; 
    background-color: ${({theme}) => theme.backgroundColor};
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media only screen and (max-width: 375px) {
        width: 80vw;
      }
`

const NumberItems = styled.p`
    color: hsl(236, 9%, 61%);
    font-size: 14px;
    padding-left: 15px;
`
const CenterDiv = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;

    @media only screen and (max-width: 375px) {
        display: none;
    }
`
const CenterMobileDiv = styled.div`
    @media only screen and (max-width: 375px) {
        display: block;
        padding-top: 20px;
    }
`
const All = styled.button`
    border: none;
    background: transparent;
    color: hsl(220, 98%, 61%);
    font-weight: 700;
    cursor: pointer;
`
const Active = styled.button`
    border: none;
    background: transparent;
    font-weight: 700;
    color: hsl(235, 19%, 35%);
    cursor: pointer;

    &:hover{
        color: hsl(235, 24%, 19%);
    }
`
const Completed = styled.button`
    border: none;
    background: transparent;
    font-weight: 700;
    color: hsl(235, 19%, 35%);
    cursor: pointer;

    &:hover{
        color: hsl(235, 24%, 19%);
    }
`
const ClearCompleted = styled.button`
    border: none;
    background: transparent;
    padding-right: 20px;
    color: hsl(236, 9%, 61%);
    cursor: pointer;

    &:hover{
        color: hsl(235, 19%, 35%);
    }
`


export default ControlButtons