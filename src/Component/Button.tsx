import {FilterValuesType} from "../App";

type PropsType = {
    name: string
    callBack: () => void
    filter: FilterValuesType
}

export const Button = (props: PropsType) => {
    const {callBack, name, filter} = props

    const newClassButton = filter === name ? 'button_active' : 'button'
    const callBackFunction = () => callBack()

    return (
        <button className={newClassButton} onClick={callBackFunction}>{name}</button>
    )
}