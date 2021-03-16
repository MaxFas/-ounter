import React  from 'react';
import '../../../App.css';

export type SetValuesType = {
    findMaxValue: (maxInputValue: number) => void
    findStartValue: (firstInputValue: number) => void
    maxValue: number
    startValue: number
}

export function SetValues(props:SetValuesType) {

    return (
        <div className={'display'}>
            <div className={'maxValue'}>max value: <input value={props.maxValue} type="number" onChange={(event)=>props.findMaxValue(event.currentTarget.valueAsNumber)}/></div>
            <div className={'startValue'}>start value: <input value={props.startValue} type="number" onChange={(event)=>props.findStartValue(event.currentTarget.valueAsNumber)}/></div>
        </div>)
}
