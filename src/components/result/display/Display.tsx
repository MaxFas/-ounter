import React from 'react';
import '../../../App.css';

export type DisplayType = {
    value: number|string
    maxValue: number
    errorMin: boolean
    errorMax: boolean
}

export function Display(props: DisplayType) {
    return (
        <div className={"display"}>
           <div className={props.value === props.maxValue||props.errorMin||props.errorMax? 'resultMax': 'result'} >
               {props.errorMin||props.errorMax? 'Incorrect value' : props.value}</div>
        </div>
    );
}

