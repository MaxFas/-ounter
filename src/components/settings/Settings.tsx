import React, {useEffect, useState} from 'react'
import {SetValues} from "./setValues/SetValues";
import {ButtonSet} from "./button/ButtonSet";

type PropsType = {
    startValue: number
    maxValue: number
    setValues: (start: number, max: number) => void
    setError: (value: string) => void
    error: string

}
export const Settings = (props: PropsType)=> {

    let [max, setMax] = useState<number>(props.maxValue)
    let [min, setMin] = useState<number>(props.startValue)

    useEffect(()=> {
        let valueAsString = localStorage.getItem('maxValue')
        if (valueAsString) {
            let valueAsNumber = JSON.parse(valueAsString)
            setMax(valueAsNumber)}
    }, [])
    useEffect(()=> {
        localStorage.setItem('maxValue', JSON.stringify(max))
    },[max])
    useEffect(()=> {
        let valueAsString = localStorage.getItem('minValue')
        if (valueAsString) {
            let valueAsNumber = JSON.parse(valueAsString)
            setMin(valueAsNumber)}
    }, [])
    useEffect(()=> {
        localStorage.setItem('minValue', JSON.stringify(min))
    },[min])

    const handleChangeMin = (value: number) => {
        if(value < 0) {
           props.setError('Incorrect value')
        }else if (value === max) {
            props.setError ('Incorrect value')
        }else if (value>max) {
            props.setError ('Incorrect value')
        }else {
            props.setError('')
        }
        setMin(value)
    }
    const handleChangeMax = (value: number) => {
        if(value<0){
            props.setError ('Incorrect value')
        } else if (value === min) {
            props.setError ('Incorrect value')
        } else if (value<min) {
            props.setError ('Incorrect value')
        } else {
            props.setError('')
        } setMax(value)
    }
    const setValues = () => {
        props.setValues(min, max)
    }


    return <div>
        <SetValues error={props.error} findMaxValue={handleChangeMax}
                   findStartValue={handleChangeMin} startValue={min} maxValue={max}/>
        <ButtonSet onClick={setValues} />
    </div>
}