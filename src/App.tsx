import React, {ChangeEvent, useEffect, useState} from "react";
import "./App.css";
import {Counter} from "./Components/Counter/Counter";
import {SettingValue, setValueType} from "./Components/SettingsValue/SettingsValue";

function App() {
    const [maxValue, setmaxValue] = useState(5)
    const [startValue, setstartValue] = useState(0)
    const [count, setCount] = useState(0)

    useEffect(() => {
        let value = localStorage.getItem("start")
        if (value) {
            let newvalue = JSON.parse(value)
            setstartValue(newvalue)
            setCount(newvalue)
        }
    }, [])

    useEffect(() => {
        let value = localStorage.getItem("max")
        if (value) {
            let newvalue = JSON.parse(value)
            setmaxValue(newvalue)

        }
    }, [])

    useEffect(() => {
        localStorage.setItem("start", JSON.stringify(startValue))
    }, [startValue])

    useEffect(() => {
        localStorage.setItem("max", JSON.stringify(maxValue))
    }, [maxValue])

    const increment = () => {
        if (count < maxValue) setCount(count + 1)
    }
    const resetCounter = () => setCount(startValue)

    let [message, setMessage] = useState("")

    let setMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setmaxValue(JSON.parse(e.currentTarget.value))
        setMessage("Установка значения")


    }
    let setStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        setstartValue(JSON.parse(e.currentTarget.value))
        setMessage("Установка значения")

    }

    const applicationSettings = (props: setValueType) => {
        setmaxValue(props.maxValue)
        setCount(props.startValue)
        setMessage("")
    }


    return (
        <div>
            <Counter
                count={count}
                resetCounter={resetCounter}
                increment={increment}
                maxValue={maxValue}
                startValue={startValue}
                message={message}/>
            <SettingValue
                maxValue={maxValue}
                startValue={startValue}
                setMaxValue={setMaxValue}
                setStartValue={setStartValue}
                applicationSettings={applicationSettings}
                setMessage={setMessage}
            />

        </div>
    );
}

export default App;