import React, {useState} from "react";
import {Button} from "./Button";
import style from "./Counter.module.css"


export const Counter = () => {

    const [count, setCount] = useState(0)

    const increment = () => {
        if (count < 5) setCount(count + 1)
    }
    const reset = () => setCount(0)

    const countLimitStyle = count === 5 && style.limitCount
    return (
        <div className={style.container}>
            <div className={`${style.screen} ${countLimitStyle}`}>{count}</div>
            <div className={style.buttonBlock}>
                <Button title={"incr"} onClick={increment} disable={Boolean(countLimitStyle)}/>
                <Button title={"reset"} onClick={reset}/>
            </div>
        </div>
    )

}

