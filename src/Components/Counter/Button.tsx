import React from "react";
import Style from "./Counter.module.css"
type ButtonPropsType = {
    nameButton: string
    onClickCount: () => void
    setDisable?: number
}


export const Button = (props: ButtonPropsType) => {
    const {onClickCount,nameButton,setDisable}=props
    return (

        <button className={`${Style.button} + ${setDisable===5?Style.disabl:""}`} onClick={onClickCount} disabled={setDisable === 5 && true}>{nameButton}</button>

    )


}