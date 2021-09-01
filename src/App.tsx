import React from "react";
import "./App.css";
import {Counter} from "./Components/Counter/Counter";
import {SettingValue} from "./Components/SettingsValue/SettingsValue";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {incValueAC, ResetValueAC, settingsValuesAC} from "./bll/counter-reduser";


function App() {
    const count = useSelector<AppStateType, number>(state => state.counter.startValue)
    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)
    const tempmStartValue = useSelector<AppStateType, number>(state => state.counter.configStartValue)
    const tempmaxValue = useSelector<AppStateType, number>(state => state.counter.configMaxValue)
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
        if (count < maxValue) {
            dispatch(incValueAC())
        }
    }
    const resetCounter = () => dispatch(ResetValueAC())
    let setSettings = () => {
        dispatch(settingsValuesAC())
    }
    return (
        <div>
            <Counter
                count={count}
                resetCounter={resetCounter}
                increment={increment}
                maxValue={maxValue}
                error={tempmStartValue >= tempmaxValue ? "error" : ""}
            />
            <SettingValue
                error={tempmStartValue > tempmaxValue ? "error" : ""}
                setSettings={setSettings}
            />

        </div>
    );
}

export default App;