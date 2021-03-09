import React, {FC, useState} from 'react'
import {SetValues} from "./SetValues";
import {ButtonSet} from "./ButtonSet";

type PropsType = {
    startValue: number
    maxValue: number
    setValues: (start: number, max: number) => void
    setError: (value: string) => void

}
export const Settings: FC<PropsType> = (props)=> {

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


    return <div>
        <SetValues findMaxValue={setMax} findStartValue={handleChangeMin} startValue={min} maxValue={max}/>
        <ButtonSet onClick={setValues} />
    </div>
}