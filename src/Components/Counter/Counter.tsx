import React from "react";
import {Button} from "../UI/Button";
import style from "./Counter.module.css"

type CounterType = {
    count: number
    resetCounter: () => void
    increment: () => void
    maxValue: number
    error: string
}

export const Counter = (props: CounterType) => {
    let {resetCounter, count, increment, maxValue, error} = props


    return (
        <div className={style.container}>
            {
                props.error ? <div className={`${style.message}`}>{error}</div> :
                    <div className={`${style.screen}  ${count === maxValue ? style.limitCount : ""} `}>{count}</div>
            }

            <div className={style.buttonBlock}>
                <Button title={"incr"} onClick={increment}
                        disable={Boolean(count === maxValue) || Boolean(error)}/>
                <Button onClick={resetCounter} title={"reset"} disable={Boolean(error)}/>
            </div>
        </div>
    )

}

