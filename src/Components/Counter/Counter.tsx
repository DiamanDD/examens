import React from "react";
import {Button} from "./Button";
import style from "./Counter.module.css"

type CounterType = {
    count: number
    resetCounter: () => void
    increment: () => void
    maxValue: number
    startValue: number
    message: string

}

export const Counter = (props: CounterType) => {
    let {count, increment, resetCounter, maxValue, message} = props


    const countLimitStyle = count === maxValue && style.limitCount
    const disabledbuttonHandler = message
    return (
        <div className={style.container}>
            {
                message ? <div className={`${style.message}`}>{message}</div> :
                    <div className={`${style.screen} ${countLimitStyle}`}>{count}</div>
            }

            <div className={style.buttonBlock}>
                <Button title={"incr"} onClick={increment}
                        disable={Boolean(countLimitStyle) || Boolean(disabledbuttonHandler)}/>
                <Button title={"reset"} onClick={resetCounter} disable={Boolean(disabledbuttonHandler)}/>
            </div>
        </div>
    )

}

