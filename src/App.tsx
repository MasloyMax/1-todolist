import React, {useEffect, useState} from 'react';
import './App.css';
import TodoList, {TaskType} from "./Component/TodoList";
import {v1} from "uuid";

export type FilterValuesType = "all" | "active" | "completed" | 'AllRemove'

function App() {
    const todoListTitle: string = "What to learn";

    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: "HTML & CSS", isDone: true},
        {id: v1(), title: "ES6 & TS", isDone: true},
        {id: v1(), title: "REACT", isDone: false},
    ])

    const [filter, setFilter] = useState<FilterValuesType> ("all")

    const addTask = (value:string) => {
      let newTask = {id: v1(), title: value, isDone: false}
        setTasks([newTask,...tasks])
    }

    const removeTask = (taskId: string) => {
        setTasks(tasks.filter(t => t.id !== taskId))
    }

    const allRemoveTask = () => {
      setTasks([])
    }

    const changeFilter = (filter: FilterValuesType) => {
        setFilter(filter)
    }

    useEffect( ()=>{console.log(tasks)},[tasks])

    const getFilteredTasksForRender = () => {
        switch (filter) {
            case "active":
                return tasks.filter(t => t.isDone === false)
            case "completed":
                return tasks.filter(t => t.isDone === true)
            default:
                return tasks
        }
    }

    const filteredTasksForRender: Array<TaskType> = getFilteredTasksForRender()

    return (
        <div className="App">
                <TodoList title={todoListTitle}
                          tasks={filteredTasksForRender}
                          remove={removeTask}
                          changeFilter={changeFilter}
                          addTask={addTask}
                          allRemoveTask={allRemoveTask}/>
        </div>
    );
}

export default App;
