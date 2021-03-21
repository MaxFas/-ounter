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
            {props.errorMax||props.errorMin? <div className={'incorrectValue'}>
                {'Incorrect value!'}</div>
                :<div className={props.value === props.maxValue ? 'resultMax' : 'result'} >
                {props.errorMin || props.errorMax ? 'Incorrect value' : props.value}</div>}
        </div>
    );
}

