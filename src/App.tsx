import React from "react";
import "./App.css";
import {Counter} from "./Components/Counter/Counter";
import { State } from "./Components/Counter/State";

function App() {


    return (
        <div className="App">
        <Counter state={State} />

        </div>
    );
}

export default App;