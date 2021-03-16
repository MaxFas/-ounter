import React from 'react';
import '../../../App.css';

export type DisplayType = {
    value: number|string
    maxValue: number
    error: string
}

export function Display(props: DisplayType) {
    return (
        <div className={"display"}>
           <div className={props.value === props.maxValue||props.error? 'resultMax': 'result'} >{props.error ? props.error : props.value}</div>
        </div>
    );
}

