import React, { useState } from 'react'
import InputForm from './InputForm'
import ItemList from './ItemList'
import ControlButtons from './ControlButtons'
import styled from 'styled-components'

const TodoComponent = () => {
    const [tasks, setTasks] = useState([]);

    console.log(tasks);

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
 
  return (
    <Container>
        <InputForm addTask={addTask}/>
        <ItemList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deletetTask}/>
        <ControlButtons tasks={tasks} filter={filter} clearCompleted={clearCompleted}/>
    </Container>
  )
}

const Container =styled.div`
  z-index: 1;
  position: absolute;
  top: 220px;
  box-shadow: 0 0 15px 0px hsl(233, 14%, 35%);

  @media only screen and (max-width: 375px) {
        top: 120px;
      }
`

export default TodoComponent