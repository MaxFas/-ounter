import React, {useState} from 'react';
import './App.css';
import {Display} from "./components/Display";
import {Buttons} from "./components/Buttons";
import {ButtonSet} from "./components/ButtonSet";
import {SetValues} from "./components/SetValues";


function App() {
    const [value, setValue] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(0)
    let [startValue, setStartValue] = useState<number>(0)

    function changeValue(newValue: number) {
        if (newValue > 5) {
            setValue(5)
        }
        if (newValue === 0) {
            setValue(0)
        } else {
            setValue(newValue)
        }
    }


    function findMaxValue(maxInputValue:number) {
        maxValue = maxInputValue
        setMaxValue(maxValue)
    }

    function findStartValue(firstInputValue:number) {
        startValue = firstInputValue
        setStartValue(startValue)
    }


    function changeSetValues(startValue: number) {
        setValue(startValue)
    }

    return (

        <div className={"wrapper"}>
            <div className={"main"}>
                <SetValues findMaxValue={findMaxValue} findStartValue={findStartValue}/>
                <ButtonSet startValue={startValue} changeSetValues={changeSetValues}/>
            </div>
            <div className={"main"}>
                <Display value={value} maxValue={maxValue}/>
                <Buttons value={value} changeValue={changeValue} startValue={startValue} maxValue={maxValue}/>
            </div>
        </div>
    );
}

export default App;
