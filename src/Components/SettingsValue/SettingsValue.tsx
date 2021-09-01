import React, {ChangeEvent} from "react";

import {Settings} from "./Settings";
import style from "./SettingValue.module.css"
import {setTempMaxValueAC, setTempStartValueAC} from "../../bll/counter-reducer";
import {useDispatch, useSelector} from "react-redux";
import {Button} from "../UI/Button";
import {getTempMaxValue, getTempStartValue} from "../../App";

export type SettingsValueType = {
    setSettings: () => void
    error: string
}
export type setValueType = {
    maxValue: number
    startValue: number
}
export const SettingValue = (props: SettingsValueType) => {
    const {setSettings, error} = props
    const tempStartValue = useSelector(getTempStartValue)
    const tempMaxValue = useSelector(getTempMaxValue)
    const dispatch = useDispatch()

    const setStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setTempStartValueAC(Number(e.currentTarget.value)))
    }
    const setMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setTempMaxValueAC(Number(e.currentTarget.value)))
    }

    return (
        <div className={style.container}>
            <div className={`${style.screen} `}>
                <Settings title={"startvalue"} onChange={setStartValue} value={tempStartValue}/>
                <Settings title={"maxvalue"} onChange={setMaxValue} value={tempMaxValue}/>
            </div>
            <div className={style.buttonBlock}>
                <Button title={"set"} onClick={setSettings} disable={Boolean(error)}/>
            </div>
        </div>
    )

}

