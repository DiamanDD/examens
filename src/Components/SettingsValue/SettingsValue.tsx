import React, {ChangeEvent, useState} from "react";
import {Button} from "./Button";
import {Settings} from "./Settings";
import style from "./SettingValue.module.css"

export type SettingsValueType = {
    maxValue: number
    startValue: number
    setMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    setStartValue: (e: ChangeEvent<HTMLInputElement>) => void
    applicationSettings: (value: setValueType) => void
    setMessage: (Message: string) => void
}
export type setValueType = {
    maxValue: number
    startValue: number
}
export const SettingValue = (props: SettingsValueType) => {
    let {startValue, maxValue, setStartValue, setMaxValue, applicationSettings, setMessage} = props


    const setValue = () => {
        let settingsValue = {
            maxValue: maxValue,
            startValue: startValue
        }

        applicationSettings(settingsValue)
    }
    const countLimitStyle = startValue === maxValue && style.limitCount
    return (
        <div className={style.container}>
            <div className={`${style.screen} `}>
                <Settings title={"max value"} setMaxValue={setMaxValue} value={maxValue}/>
                <Settings title={"start value"} setStartValue={setStartValue} valueStart={startValue}/>
            </div>
            <div className={style.buttonBlock}>
                <Button title={"set"} onClick={setValue} disable={Boolean(countLimitStyle)}/>

            </div>
        </div>
    )

}

