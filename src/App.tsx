import React from "react";
import "./App.css";
import {Counter} from "./Components/Counter/Counter";
import {SettingValue} from "./Components/SettingsValue/SettingsValue";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {incValueAC, ResetValueAC, settingsValuesAC} from "./bll/counter-reducer";


export const getStartValue=(state:AppStateType)=>state.counter.startValue
export const getMaxValue=(state:AppStateType)=>state.counter.maxValue
export const getTempStartValue=(state:AppStateType)=>state.counter.configStartValue
export const getTempMaxValue=(state:AppStateType)=>state.counter.configMaxValue

function App() {
    const startValue = useSelector(getStartValue)
    const maxValue = useSelector(getMaxValue)
    const tempStartValue = useSelector(getTempStartValue)
    const tempMaxValue = useSelector(getTempMaxValue)
    const dispatch = useDispatch()

    // useEffect(() => {
    //     let value = localStorage.getIte ("start")
    //     if (value) {
    //         let newvalue = JSON.parse(value)
    //         setstartValue(newvalue)
    //         setCount(newvalue)
    //     }
    // }, [])
    //
    // useEffect(() => {
    //     let value = localStorage.getItem("max")
    //     if (value) {
    //         let newvalue = JSON.parse(value)
    //         setmaxValue(newvalue)
    //
    //     }
    // }, [])
    //
    // useEffect(() => {
    //     localStorage.setItem("start", JSON.stringify(startValue))
    // }, [startValue])
    //
    // useEffect(() => {
    //     localStorage.setItem("max", JSON.stringify(maxValue))
    // }, [maxValue])
    //
    //

    const increment = () => {
        if (startValue < maxValue) {
            dispatch(incValueAC())
        }
    }
    const resetCounter = () => dispatch(ResetValueAC())
    let setSettings = () => {
        dispatch(settingsValuesAC(tempStartValue,tempMaxValue))
    }
    return (
        <div>
            <Counter
                count={startValue}
                resetCounter={resetCounter}
                increment={increment}
                maxValue={maxValue}
                error={tempStartValue >= tempMaxValue ? "error" : ""}
            />
            <SettingValue
                error={tempStartValue >= tempMaxValue ? "error" : ""}
                setSettings={setSettings}
            />

        </div>
    );
}

export default App;