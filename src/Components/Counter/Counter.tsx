import React, {useState} from "react";
import {Button} from "./Button";
import { StateType} from "./State";
import style from "./Counter.module.css"






export const Counter = (props:StateType) => {
    const {startPos,nameButtonIncr,nameButtonReset}=props.state
    let [count, setCount] = useState(startPos)
    const increment = () => {if(count<5) setCount(count+1)}
    const reset = () => setCount(0)

        return (
            <div className={style.container}>
                <div className={`disp ${style.okno} ${count === 5 ? "stop" : ""}`}>{count}</div>
                <div className={style.buttonBlock}>
                    <Button nameButton={nameButtonIncr} onClickCount={increment} setDisable={count}/>
                    <Button nameButton={nameButtonReset} onClickCount={reset}/>
                </div>
            </div>
        )
    }

