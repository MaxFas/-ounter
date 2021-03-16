import React, { useState} from 'react';
import './App.css';
import {Settings} from "./components/settings/Settings";
import {Result} from "./components/result/Result";


function App() {
    const [value, setValue] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(0)
    let [startValue, setStartValue] = useState<number>(0)
    let [error, setError] = useState<string>('')

    function changeValue(newValue: number) {
        setValue(newValue)
    }

    const setValues = (start: number, max: number) => {
        setValue(start)
        setMaxValue(max)
        setStartValue(start)
    }
    return (

        <div className={"wrapper"}>
            <div className={"main"}>
                <Settings startValue={startValue} maxValue={maxValue} setValues={setValues}
                          setError={setError}  error={error}/>
            </div>
            <div className={"main"}>
                <Result value={value} maxValue={maxValue} startValue={startValue} error={error}
                        changeValue={changeValue}/>
            </div>
        </div>
    );
}

export default App;
