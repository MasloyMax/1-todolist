import {ChangeEvent, KeyboardEvent, useState} from "react";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

type PropsType = {
    value: string
    error?: string | null
    onChange: (value: string) => void
    onKeyDown: (key: string) => void
}

export const SuperInputChange = (props: PropsType) => {
    const {
        onChange,
        onKeyDown,
        error,
        value
    } = props

    const classInput = error ? 'error' : ''

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.currentTarget.value)
    }

    const onKeyHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyDown(e.key)
    }

    return (
        <input className={classInput} value={value} onChange={onChangeHandler}
               onKeyDown={onKeyHandler}/>
    )
}