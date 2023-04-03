import React, { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from './ThemeContext';

const ItemList = ({handleDragStart, handleDragOver, handleDrop, tasks, toggleComplete, deleteTask }) => {
    const {isDarkMode} = useContext(ThemeContext);

    const lightTheme = {
        color: "hsl(235, 19%, 35%)",
        backgroundColor: "hsl(0, 0%, 98%)",
    }

    const darkTheme = {
        color: "hsl(234, 39%, 85%)",
        backgroundColor: "hsl(235, 24%, 19%)",
    }

    const handleTouchStart = (e, index) => {
        e.stopPropagation();
        e.preventDefault();
        handleDragStart(e, index);
    };

    const handleTouchMove = (e) => {
        e.stopPropagation();
        e.preventDefault();
        handleDragOver(e);
    };

    const handleTouchEnd = (e, index) => {
        e.stopPropagation();
        e.preventDefault();
        handleDrop(e, index);
    }

  return (
    <>
    <Container theme={{...lightTheme, ...(isDarkMode && darkTheme)}}>
    {Array.isArray(tasks) && tasks.length > 0 ? (
        tasks.map((task, index) =>(
        <List key={task.id}
              draggable="true"
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, index)}
              onTouchStart={(e) => handleTouchStart(e, index)}
              onTouchMove={handleTouchMove}
              onTouchEnd={(e) => handleTouchEnd(e, index)}
            >
            
            <Circle tabIndex={0} checked={task.isCompleted}
                    onClick={() => toggleComplete(task.id)}
                 >
                    <CheckMark src='../../public/images/icon-check.svg'  width="11" height="9">
                        <path fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6"/>
                    </CheckMark>
                 </Circle>

            <ListItems completed={task.isCompleted}>
                    {task.text}
            </ListItems>

                <CrossMark
                onClick={() => deleteTask(task.id)}
                src='../../public/images/icon-cross.svg' width="18" height="18">
                    <path fill="#494C6B" fillRule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/>
                </CrossMark>
        </List> 
        ))
        ): (
            <p>{""}</p>
    )}
    </Container>
    </>
  )
}

const Container= styled.div`
    position: relative; 
    width: 40vw;
    background-color: ${({theme}) => theme.backgroundColor};
    color: ${({theme}) => theme.color};

    @media only screen and (max-width: 375px) {
        width: 80vw;
      }
    
`
const List= styled.ul`
    list-style: none;
    height: 50px;
    border-bottom: solid 1px hsl(235, 24%, 19%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 60px;
    cursor: grab;
`
const ListItems= styled.li`
    text-decoration: ${props => props.completed ? 'line-through' : 'none'};
    color: ${props => props.completed ? 'hsl(236, 9%, 61%)' : 'hsl(235, 19%, 35%)'};
    flex: 2;
`
const Circle = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: solid 1px hsl(233, 11%, 84%);
    position: absolute;
    top: 0px;
    right: 50px;
    display: grid;
    place-items: center;
    cursor: pointer;
    position: relative;
    /* & svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    } */

    &:focus,
    &:hover{
        background: linear-gradient(-50deg, hsl(0, 0%, 98%),hsl(0, 0%, 98%) ) padding-box,
                    linear-gradient(-50deg, hsl(280, 87%, 65%),hsl(192, 100%, 67%) ) border-box;
        border-radius: 50%;
        border: 1px solid transparent; 
    }

    &:focus{
        background: linear-gradient(-50deg, hsl(280, 87%, 65%),hsl(192, 100%, 67%) )  ;
    }
`
const CheckMark= styled.svg`
`
const CrossMark= styled.svg`
    padding-right: 20px;
    cursor: pointer;
`

export default ItemList