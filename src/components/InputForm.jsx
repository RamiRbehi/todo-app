import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { ThemeContext } from './ThemeContext';

const InputForm = ({addTask}) => {
  const {isDarkMode} = useContext(ThemeContext);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleSubmit = (event) =>{
    event.preventDefault();
    addTask(newTask);
    setNewTask("");
  }

    const lightTheme = {
        backgroundColor: "hsl(0, 0%, 98%)",
    }

    const darkTheme = {
        backgroundColor: "hsl(235, 24%, 19%)",
    }

  return (
    <Container>
        <Form onSubmit={handleSubmit}>
            <Circle></Circle>
            <Input
            value={newTask}
            onChange={handleChange}
            theme={{...lightTheme, ...(isDarkMode && darkTheme)}} 
            type='text' 
            placeholder='Create a new todo...'/>
        </Form>
    </Container>
  )
}

const Container = styled.div`
    width: 40vw;
    padding-bottom: 20px;

    @media only screen and (max-width: 375px) {
        width: 80vw;
      }
`
const Form = styled.form`
    position: relative;
`
const Circle = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: solid 1px hsl(233, 11%, 84%);
    position: absolute;
    top: 12px;
    left: 10px;
`
const Input = styled.input`
    width: 100%;
    height: 50px;
    border: none;
    border-radius: 5px;
    color: hsl(235, 19%, 35%);
    font-size: 16px;
    background-color: ${({theme}) => theme.backgroundColor};

    &[type="text"] {
    text-indent: 60px;
  }
`

export default InputForm