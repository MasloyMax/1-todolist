import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterValuesType} from "../App";
import {Button} from "./Button";
import {SuperInputChecked} from "./SuperInputChecked";
import {SuperInputChange} from "./SuperInputChange";

type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    remove: (taskId: string) => void
    changeFilter: (filter: FilterValuesType) => void
    addTask: (value: string) => void
    allRemoveTask: () => void
    changeStatus: (taskId: string, isDone: boolean) => void
    filter: FilterValuesType
}

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}


const TodoList = (props: TodoListPropsType) => {
    const {
        filter,
        tasks,
        title,
        remove,
        changeFilter,
        addTask,
        allRemoveTask,
        changeStatus
    } = props

    const [value, setValue] = useState<string>('')
    const [error, setError] = useState<string | null>(null)

    // const classInput = error ? 'error' : ''

    const onChangeHandler = (value:string) => setValue(value)

    const addTaskHandler = () => {
        if (value.trim() !== '') {
            addTask(value.trim());
            setValue('')
        } else {
            setError('title is required')
        }
    }
    const opnKeuDownAddTaskHandler = (key:string) => {
        error && setError('')
        key === 'Enter' && addTaskHandler()
    }

    const getOnClickSetFilterHandler = (filter: FilterValuesType) => () => changeFilter(filter)

    const allRemoveTaskHandler = () => allRemoveTask()

    const onClickRemoveTask = (tId: string) => () => remove(tId)


    const errorMessage = error && <div className='error-message'>{error}</div>

    const tasksItems = tasks.length
        ? tasks.map((task: TaskType) => {

            const onChangeStatusHandler = (checked: boolean) => changeStatus(task.id, checked)

            return (<li key={task.id}>
                {/*<input onChange={onChangeStatusHandler}*/}
                {/*       type="checkbox"*/}
                {/*       checked={task.isDone}*/}
                {/*/>*/}
                <SuperInputChecked callBack={ onChangeStatusHandler} checked={task.isDone}/>
                <span>{task.title}</span>
                <Button filter={filter} name={"X"} callBack={onClickRemoveTask(task.id)}/>
            </li>)
        })
        : <span>Tasks list is empty</span>

    return (
        <div>
            <h3>{title}</h3>
            <div>
                {/*<input value={value}*/}
                {/*       onChange={onChangeHandler}*/}
                {/*       onKeyDown={opnKeuDownAddTaskHandler}*/}
                {/*       className={classInput}*/}
                {/*/>*/}
                <SuperInputChange value={value}
                                  error={error}
                                  onChange={onChangeHandler}
                                  onKeyDown={opnKeuDownAddTaskHandler}
                                  />
                <Button filter={filter} name={'+'} callBack={addTaskHandler}/>
                {errorMessage}
            </div>
            <ul>
                {tasksItems}
            </ul>
            <div>
                <Button filter={filter} name={'all'} callBack={getOnClickSetFilterHandler('all')}/>
                <Button filter={filter} name={'active'} callBack={getOnClickSetFilterHandler('active')}/>
                <Button filter={filter} name={'completed'} callBack={getOnClickSetFilterHandler('completed')}/>
                <Button filter={filter} name={'allRemove'} callBack={allRemoveTaskHandler}/>
            </div>
        </div>
    );
};

export default TodoList;