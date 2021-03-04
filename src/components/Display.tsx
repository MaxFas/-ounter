import React from 'react';
import '.././App.css';

export type DisplayType = {
    value: number
}

export function Display(props: DisplayType) {
    return (
        <div className={"display"}>
           <div className={props.value === 5? 'resultMax': 'result'} >{props.value}</div>
        </div>
    );
}

