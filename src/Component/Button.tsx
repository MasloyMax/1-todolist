import {FilterValuesType} from "../App";

type PropsType = {
    name: string
    callBack: () => void
}

export const Button = (props: PropsType) => {
    const {callBack,name} = props

    const callBackFunction = () => callBack()

    return (
            <span><button onClick={callBackFunction}>{name}</button></span>

    )
}