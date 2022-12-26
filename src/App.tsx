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
        {id: v1(), title: "Angular", isDone: false},
        {id: v1(), title: "PreProc-scss", isDone: false},
        {id: v1(), title: "webpack", isDone: false},
        {id: v1(), title: "ReactNative", isDone: false},
        {id: v1(), title: "OpenShift", isDone: false},
    ])

    const [filter, setFilter] = useState<FilterValuesType>("all")

    const addTask = (value: string) => {
        let newTask = {id: v1(), title: value, isDone: false}
        setTasks([newTask, ...tasks])
    }

    const removeTask = (taskId: string) => setTasks(tasks.filter(t => t.id !== taskId))

    const allRemoveTask = () => setTasks([])

    const changeFilter = (filter: FilterValuesType) => setFilter(filter)

    const getFilteredTasksForRender = () => {
        switch (filter) {
            case "active":
                return tasks.filter(t => !t.isDone)
            case "completed":
                return tasks.filter(t => t.isDone === true)
            default:
                return tasks
        }
    }

    const filteredTasksForRender: Array<TaskType> = getFilteredTasksForRender()

    const changeStatus = (taskId: string, isDone: boolean) => {
        setTasks(tasks.map(t => t.id === taskId ? {...t, isDone: isDone}: t))//++
        // let task = tasks.find(t => t.id === taskId)
        // if(task){
        //     task.isDone = isDone
        // }
        // setTasks([...tasks])
    }

    return (
        <div className="App">
            <TodoList title={todoListTitle}
                      tasks={filteredTasksForRender}
                      remove={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}
                      allRemoveTask={allRemoveTask}
                      changeStatus={changeStatus}
                      filter={filter}
            />
        </div>
    );
}

export default App;
