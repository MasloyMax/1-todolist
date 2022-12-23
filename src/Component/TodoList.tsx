import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterValuesType} from "../App";
import {Button} from "./Button";

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
    const {tasks,remove,changeFilter,addTask,allRemoveTask,title} = props

    const [value, setValue] = useState<string>('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)

    const addTaskHandler = () => {
        addTask(value);
        setValue('')
    }
    const opnKeuDownAddTaskHandler = (e: KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && addTaskHandler()

    const getOnClickSetFilterHandler = (filter: FilterValuesType) => () => changeFilter(filter)

    const allRemoveTaskHandler = () => allRemoveTask()

    const onClickRemoveTask = (tId:string) => remove(tId)

    const tasksItems = tasks.length
        ? tasks.map((task: TaskType) => {
            return (<li key={task.id}>
                <input type="checkbox" checked={task.isDone}/>
                <span>{task.title}</span>
                <Button name={"X"} callBack={()=>onClickRemoveTask(task.id)}/>
            </li>)
        })
        : <span>Tasks list is empty</span>

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input value={value}
                       onChange={onChangeHandler}
                       onKeyDown={opnKeuDownAddTaskHandler}
                />
                <Button name={'+'} callBack={addTaskHandler}/>
            </div>
            <ul>
                {tasksItems}
            </ul>
            <div>
                <Button name={'All'} callBack={getOnClickSetFilterHandler('all')}/>
                <Button name={'Active'} callBack={getOnClickSetFilterHandler('active')}/>
                <Button name={'Completed'} callBack={getOnClickSetFilterHandler('completed')}/>
                <Button name={'All Remove'} callBack={allRemoveTaskHandler}/>
            </div>
        </div>
    );
};

export default TodoList;