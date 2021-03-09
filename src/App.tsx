import React, {useState} from 'react';
import './App.css';
import {Display} from "./components/Display";
import {Buttons} from "./components/Buttons";
import {Settings} from "./components/SettingsComponent";


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
              <Settings startValue={startValue} maxValue={maxValue} setValues={setValues} setError={setError}/>
            </div>
            <div className={"main"}>
                <Display value={value} maxValue={maxValue} error={error}/>
                <Buttons value={value} changeValue={changeValue} startValue={startValue} maxValue={maxValue}/>
            </div>
        </div>
    );
}

export default App;
