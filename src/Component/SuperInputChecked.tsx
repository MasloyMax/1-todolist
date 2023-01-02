import {ChangeEvent} from "react";

type PropsType = {
    callBack: (checked: boolean) => void
    checked: boolean
}

export const SuperInputChecked = (props: PropsType) => {

    const {callBack, checked} = props

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        callBack(e.currentTarget.checked)
    }

    return (
        <input onChange={onChangeHandler}
               type={"checkbox"}
               checked={checked}/>
    )
}