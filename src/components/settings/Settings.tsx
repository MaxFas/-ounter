import React, {useEffect, useState} from 'react'
import {SetValues} from "./setValues/SetValues";
import {ButtonSet} from "./button/ButtonSet";

type PropsType = {
    startValue: number
    maxValue: number
    setValues: (start: number, max: number) => void
    setErrorMin: (value: boolean) => void
    errorMin: boolean
    setErrorMax: (value: boolean)=>void
    errorMax: boolean

}
export const Settings = (props: PropsType)=> {
    let [max, setMax] = useState<number>(props.maxValue)
    let [min, setMin] = useState<number>(props.startValue)

    const setValues = () => {
        props.setValues(min, max)}

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
           props.setErrorMin(true)
        }else if (value === max) {
            props.setErrorMin (true)
            props.setErrorMax (true)
        }else if (value>max) {
            props.setErrorMin (true)
            props.setErrorMax (false)
        }else {
            props.setErrorMax (false)
            props.setErrorMin(false)
        }
        setMin(value)}
    const handleChangeMax = (value: number) => {
        if(value<0){
            props.setErrorMax (true)
        } else if (value === min) {
            props.setErrorMax (true)
            props.setErrorMin (true)
        } else if (value<min) {
            props.setErrorMax (true)
            props.setErrorMin (false)

        } else {
            props.setErrorMax(false)
            props.setErrorMin (false)
        }
        setMax(value)}

    return <div>
        <SetValues errorMin={props.errorMin} errorMax={props.errorMax} findMaxValue={handleChangeMax}
                   findStartValue={handleChangeMin} startValue={min} maxValue={max}/>
        <ButtonSet errorMin={props.errorMin} errorMax={props.errorMax} onClick={setValues} />
    </div>
}