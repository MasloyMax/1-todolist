import React, {useEffect, useState} from 'react';
import './App.css';
import TodoList, {TaskType} from "./Component/TodoList";
import {type} from "os";
export type FilterValuesType = 'all' | 'active' | 'completed'

function App() {
    const todoListTitle: string = 'What to learn'
    const todoListTitle_2: string = 'What to buy'

    // let tasks: Array<TaskType>, setTasks:(tasks: Array<TaskType>) => void
    let [tasks, setTasks] = useState([
        {id: 1, title: "HTML & CSS", isDone: true},
        {id: 2, title: "JAVASCRIPT AND TYPESCRIPT", isDone: true},
        {id: 4, title: "REACT", isDone: false},
        {id: 5, title: "REACT", isDone: false},
        {id: 6, title: "REACT", isDone: false}
    ])

    // let [filter, setFilter] = useState('all')
    const removeTask = (id: number) => {
        let filterTasks = tasks.filter((t) => t.id !== id) //стейт обновляется асинхронно
        setTasks(filterTasks)
    }

    // useEffect(() =>{
    //     console.log(tasks)
    // }, [tasks])
    // setTasks(tasks.filter(t => t.id !== taskId))

    let [filter, setFilter] = useState<FilterValuesType>('all')

    const changeFilter = (filter: FilterValuesType) => {
        setFilter(filter)
    }

    const getfilteredTaskForRender = () => {
        switch (filter) {
            case "active":
                return tasks.filter(t => t.isDone === false)
            case "completed":
                return tasks.filter(t => t.isDone === true)
            default:
                return tasks
        }
    }
    const getFilteredTaskForRender: Array<TaskType> = getfilteredTaskForRender()

    return (
        <div className="App">
            <TodoList changeFilter={changeFilter} removeTask={removeTask} title={todoListTitle} tasks={getFilteredTaskForRender}/>
        </div>
    )
}

export default App