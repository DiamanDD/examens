import React, {ChangeEvent} from "react";
import style from "./SettingValue.module.css"

export type SettingsType = {
    title: string
    onChange:(e: ChangeEvent<HTMLInputElement>)=>void
    value:number
}

export const Settings = (props: SettingsType) => {
    return (
        <div className={style.settingValue}>
            <span className={style.titleStartValue}>{props.title}</span>
            <input
                className={style.inputStartValue}
                type={"number"}
                onChange={props.onChange}
                value={props.value}/>
        </div>
    )
}

