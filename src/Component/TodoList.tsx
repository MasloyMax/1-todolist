import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterValuesType} from "../App";

type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    remove: (taskId: string) => void
    changeFilter: (filter: FilterValuesType) => void
    addTask: (value: string) => void
    allRemoveTask: () => void
}

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

const TodoList = (props: TodoListPropsType) => {
    const tasksItems = props.tasks.length
        ? props.tasks.map((task: TaskType) => {
            const onClickRemoveTaskHandler = () => {
                props.remove(task.id)
            }
            return (<li key={task.id}>
                <input type="checkbox" checked={task.isDone}/>
                <span>{task.title}</span>
                <button onClick={onClickRemoveTaskHandler}>x</button>
            </li>)
        })
        : <span>Tasks list is empty</span>

    const [value, setValue] = useState<string>('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const addTaskHandler = () => {
        props.addTask(value);
        setValue('')
    }
    const opnKeuDownAddTaskHandler = (e: KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && addTaskHandler()

    const getOnClickSetFilterHandler = (filter: FilterValuesType) => () => props.changeFilter(filter)

    const allRemoveTaskHandler = () => {
      props.allRemoveTask()
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={value}
                       onChange={onChangeHandler}
                       onKeyDown={opnKeuDownAddTaskHandler}
                />
                <button onClick={addTaskHandler}>+
                </button>
            </div>
            <ul>
                {tasksItems}
            </ul>
            <div>
                <button onClick={getOnClickSetFilterHandler('all')}>All</button>
                <button onClick={getOnClickSetFilterHandler('active')}>Active</button>
                <button onClick={getOnClickSetFilterHandler('completed')}>Completed</button>
                <button onClick={allRemoveTaskHandler}>All Remove</button>
            </div>
        </div>
    );
};

export default TodoList;