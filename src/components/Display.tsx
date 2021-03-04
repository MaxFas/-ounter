import React from 'react';
import '.././App.css';

export type DisplayType = {
    value: number
}

export function Display(props: DisplayType) {
    return (
        <div className={"display"}>
            <input className={props.value === 5? 'inputMax': 'input'} value={props.value}/>
        </div>
    );
}

