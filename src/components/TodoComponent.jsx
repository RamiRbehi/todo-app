import React, { useState } from 'react'
import InputForm from './InputForm'
import ItemList from './ItemList'
import ControlButtons from './ControlButtons'

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
              return setTasks(tasks);
            case 'active':
              return setTasks(tasks.filter((task) => !task.isCompleted));
            case 'completed':
              return setTasks(tasks.filter((task) => task.isCompleted));
            default:
              return setTasks(tasks);
          }
    };

    const clearCompleted = () => {
        const completedTasks = tasks.filter((task) => !task.isCompleted);
        setTasks(completedTasks);
    };
 
  return (
    <div>
        <InputForm addTask={addTask}/>
        <ItemList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deletetTask}/>
        <ControlButtons tasks={tasks} filter={filter} clearCompleted={clearCompleted}/>
    </div>
  )
}

export default TodoComponent