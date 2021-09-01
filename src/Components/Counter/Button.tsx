import React from "react";
import Style from "./Counter.module.css"

type ButtonPropsType = {
    title: string
    onClick: () => void
    disable?: boolean
}

export const Button = (props: ButtonPropsType) => {
    const {title, disable} = props
    return (
        <button onClick={props.onClick}
                className={`${Style.button}  ${disable && Style.disabled}`}
                disabled={disable}>{title}
        </button>

    )


}