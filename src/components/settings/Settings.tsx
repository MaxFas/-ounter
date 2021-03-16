import React, { useState} from 'react'
import {SetValues} from "./setValues/SetValues";
import {ButtonSet} from "./button/ButtonSet";

type PropsType = {
    startValue: number
    maxValue: number
    setValues: (start: number, max: number) => void
    setError: (value: string) => void

}
export const Settings = (props: PropsType)=> {

    let [max, setMax] = useState<number>(props.maxValue)
    let [min, setMin] = useState<number>(props.startValue)

    const setValues = () => {
        props.setValues(min, max)
    }

    const handleChangeMin = (value: number) => {
        if(value < 0) {
           props.setError('Incorrect value')
        } else {
            props.setError('')
        }
        setMin(value)
    }

    const handleChangeMax = (value: number) => {
        if(value<0){
            props.setError ('Incorrect value')
        } else if (value === min) {
            props.setError ('Incorrect value')
        } else {
            props.setError('')
        } setMax(value)
    }


    return <div>
        <SetValues findMaxValue={handleChangeMax} findStartValue={handleChangeMin} startValue={min} maxValue={max}/>
        <ButtonSet onClick={setValues} />
    </div>
}