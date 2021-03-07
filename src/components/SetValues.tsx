import React  from 'react';
import '.././App.css';

export type SetValuesType = {
    findMaxValue: (maxInputValue: number) => void
    findStartValue: (firstInputValue: number) => void
}

export function SetValues(props:SetValuesType) {

    return (
        <div className={'display'}>
            <div className={'maxValue'}>max value: <input type="number" onChange={(event)=>props.findMaxValue(event.currentTarget.valueAsNumber)}/></div>
            <div className={'startValue'}>start value: <input type="number" onChange={(event)=>props.findStartValue(event.currentTarget.valueAsNumber)}/></div>
        </div>)
}
