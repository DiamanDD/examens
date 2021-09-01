import React, {ChangeEvent} from "react";
import {Button} from "./Button";
import {Settings} from "./Settings";
import style from "./SettingValue.module.css"
import {setTempMaxValueAC, setTempStartValueAC} from "../../bll/counter-reduser";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../bll/store";

export type SettingsValueType = {
    setSettings: () => void
    error: string
}
export type setValueType = {
    maxValue: number
    startValue: number
}
export const SettingValue = (props: SettingsValueType) => {
    const disabledbuttonHandler = props.error
    const tempStartValue = useSelector<AppStateType, number>(state => state.counter.configStartValue)
    const tempMaxValue = useSelector<AppStateType, number>(state => state.counter.configMaxValue)
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
                <Button title={"set"} onClick={props.setSettings} disable={Boolean(disabledbuttonHandler)}/>
            </div>
        </div>
    )

}

