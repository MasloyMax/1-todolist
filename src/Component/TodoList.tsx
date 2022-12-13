import React, {useState} from "react";

// type TodoListPropsType = {
//     title?: string
//     tasks: Array<TaskType>
//     removeTask: (taskId: number) => void
//     changeFilter: (filter:FilterValuesType) => void
//     changeAllRemove:(remove:DeleteButtonType) => void
// }

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}
export type FilterValuesType = 'all' | 'active' | 'completed' | 'three'
// export type DeleteButtonType = 'delete'| []

const TodoList = () => {
    const todoListTitle: string = 'What to learn'
    let [tasks, setTasks] = useState([
        {id: 1, title: "HTML & CSS", isDone: true},
        {id: 2, title: "JAVASCRIPT AND TYPESCRIPT", isDone: true},
        {id: 4, title: "REACT", isDone: false},
        {id: 5, title: "REACT", isDone: false},
        {id: 6, title: "REACT", isDone: false},
        {id: 7, title: "REACT", isDone: false},
        {id: 8, title: "REACT", isDone: false},
        {id: 9, title: "REACT", isDone: false},
        {id: 10, title: "REACT", isDone: false}
    ])

    const removeTask = (id?: number) => {
        setTasks(id ? tasks.filter((t) => t.id !== id) : [])// если id true(?) то закидываем таски если false(:) то пустой массив
    }

    let [filter, setFilter] = useState<FilterValuesType>('all')


    const filterButton = () => {
        switch (filter) {
            case 'active':
                return tasks.filter((t) => t.isDone === true)
            case 'completed':
                return tasks.filter((t) => t.isDone === false)
            case 'three':
                return tasks.slice(0, 3)
            default:
                return tasks
        }
    }

    const filteredTasks: Array<TaskType> = filterButton()


    const changeFilter = (filter: FilterValuesType) => {
        setFilter(filter)
    }

    // const changeAllRemove = (remove:DeleteButtonType) => {
    //     if(remove === 'delete'){
    //         return setTasks([])
    //     }
    // }

    let newTask = filteredTasks.length
        ? filteredTasks.map((t: TaskType) => {
            return <li key={t.id}>
                <input type="checkbox" checked={t.isDone}/>
                <span>{t.title}</span>
                <button onClick={() => removeTask(t.id)}>x</button>
            </li>
        }) : <span>Loading</span>
    return (
        <div>
            <h3>{todoListTitle}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {newTask}
            </ul>
            <div>
                <button onClick={() => removeTask()}>All remove</button>
            </div>
            <div>
                <button onClick={() => changeFilter('all')}>All</button>
                <button onClick={() => changeFilter('active')}>Active</button>
                <button onClick={() => changeFilter('completed')}>Completed</button>
                <button onClick={() => changeFilter('three')}>three</button>
            </div>
        </div>
    )
}

export default TodoList