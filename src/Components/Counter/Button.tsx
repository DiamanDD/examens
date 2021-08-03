import React from "react";
import Style from "./Counter.module.css"

type ButtonPropsType = {
    title: string
    onClick: () => void
    disable?: boolean
}


export const Button = (props: ButtonPropsType) => {
    const {onClick, title, disable} = props
    return (

        <button
            className={`${Style.button}  ${disable && Style.disabled}`}
            onClick={onClick}
            disabled={disable}>{title}
        </button>

    )


}