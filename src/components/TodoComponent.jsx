import React, { useContext, useState } from 'react'
import InputForm from './InputForm'
import ItemList from './ItemList'
import ControlButtons from './ControlButtons'
import styled from 'styled-components'
import { ThemeContext } from './ThemeContext'

const TodoComponent = () => {
  const {isDarkMode} = useContext(ThemeContext);
  const [tasks, setTasks] = useState([
    {id: 1, text: "Complete online JavaScript course", isCompleted: true},
    {id: 2, text: "Jog around the park 3x", isCompleted: false},
    {id: 3, text: "10 minutes meditation", isCompleted: false},
    {id: 4, text: "Read for 1 hour", isCompleted: false},
    {id: 5, text: "Pick up groceries", isCompleted: false},
    {id: 6, text: "Complete Todo App on Frontend Mentor", isCompleted: false},
  ]);

    const addTask = (newTask) => {
        const newTasks = [...tasks, {id: Date.now(), text: newTask, isCompleted: false}];
        setTasks(newTasks);
    };

    const toggleComplete = (taskId) => {
        const updateTasks = tasks.map((task) => {
            if (task.id === taskId) {
                return {...task, isCompleted: !task.isCompleted};
            } else {
                return task;
            }
        });
        setTasks(updateTasks);
    };

    const deletetTask = (taskId) => {
        const remainingTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(remainingTasks);
    };

    const filter = (filterType) => {
        switch (filterType) {
            case 'all':
               const allTasks = tasks;
               if(allTasks === tasks) {
                setTasks(allTasks);
               }
               break;
            case 'active':
               const activeTasks = tasks.filter((task) => !task.isCompleted);
               if (activeTasks.length > 0) {
                setTasks(activeTasks);
               }
               break;
            case 'completed':
              const completedTasks = tasks.filter((task) => task.isCompleted);
              if (completedTasks.length > 0) {
                setTasks(completedTasks);
              }
              break;
            default:
               setTasks(tasks);
          }
    };

    const clearCompleted = () => {
      const completedTasks = tasks.filter((task) => task.isCompleted);
      setTasks(completedTasks);
  };

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('text/plain', index);  
}

const handleDragOver = (e) => {
    e.preventDefault();
}

const handleDrop = (e, index) => {
  if (!e.dataTransfer) {
    return;
  }
    const dragIndex = e.dataTransfer.getData('text/plain');
    const newTasks = [...tasks];
    const draggedTask = newTasks[dragIndex];
    newTasks.splice(dragIndex, 1);
    newTasks.splice(index, 0, draggedTask);
    setTasks(newTasks);
}

const lightTheme = {
  backgroundColor: "hsl(0, 0%, 98%)",
}

const darkTheme = {
  backgroundColor: "hsl(235, 24%, 19%)",
}
 
  return (
    <Container theme={{...lightTheme, ...(isDarkMode && darkTheme)}}>
        <InputForm addTask={addTask}/>
        <ItemList handleDragStart={handleDragStart} 
        handleDragOver={handleDragOver} 
        handleDrop={handleDrop} 
        tasks={tasks} 
        toggleComplete={toggleComplete} 
        deleteTask={deletetTask}/>
        <ControlButtons
        tasks={tasks} 
        filter={filter} 
        clearCompleted={clearCompleted}/>
    </Container>
  )
}

const Container =styled.div`
  background-color: ${({theme}) => theme.backgroundColor};
  z-index: 1;
  position: absolute;
  top: 120px;
  box-shadow: 0 0 15px 0px hsl(233, 14%, 35%);
  display: flex;
  flex-direction: column;
  border-radius: 5px; 

  @media only screen and (max-width: 375px) {
        top: 100px;
      }
`

export default TodoComponent