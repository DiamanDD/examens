import React, {ChangeEvent} from "react";
import style from "./SettingValue.module.css"

export type SettingsType = {
    title: string
    setMaxValue?: (e: ChangeEvent<HTMLInputElement>) => void
    setStartValue?: (e: ChangeEvent<HTMLInputElement>) => void
    value?: number
    valueStart?: number
}


export const Settings = (props: SettingsType) => {

    return (
        <div className={style.settingValue}>
            <span className={style.titleStartValue}>{props.title}</span>
            <input
                className={style.inputStartValue}
                type={"number"}
                onChange={props.title === "max value" ? props.setMaxValue : props.setStartValue}
                value={props.title === "max value" ? props.value : props.valueStart}/>
        </div>
    )
}