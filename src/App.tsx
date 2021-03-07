import React, {useState} from 'react';
import './App.css';
import {Display} from "./components/Display";
import {Buttons} from "./components/Buttons";
import {ButtonSet} from "./components/ButtonSet";
import {SetValues} from "./components/SetValues";

function App() {
    const [value, setValue] = useState<number>(0)

    function changeValue(newValue: number) {
        if (newValue > 5) {
            setValue(5)
        }
        if (newValue === 0) {
            setValue(newValue)
        } else {
            setValue(newValue)
        }
    }

    return (

        <div className={"wrapper"}>
            <div className={"main"}>
                <SetValues />
                <ButtonSet />
            </div>
            <div className={"main"}>
                <Display value={value}/>
                <Buttons value={value} changeValue={changeValue}/>
            </div>
        </div>
    );
}

export default App;
