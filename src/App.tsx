import React, { useState} from 'react';
import './App.css';
import {Settings} from "./components/settings/Settings";
import {Result} from "./components/result/Result";


function App() {
    const [value, setValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)
    const [errorMin, setErrorMin] = useState<boolean>(false)
    const [errorMax, setErrorMax] = useState<boolean>(false)

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
                          setErrorMin={setErrorMin} errorMin={errorMin} setErrorMax={setErrorMax} errorMax={errorMax}/>
            </div>
            <div className={"main"}>
                <Result value={value} maxValue={maxValue} startValue={startValue} errorMin={errorMin}
                        errorMax={errorMax} changeValue={changeValue}/>
            </div>
        </div>
    );
}

export default App;
