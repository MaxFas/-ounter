import React, {useState} from 'react';
import '../../../App.css';

export type ButtonsType = {
    value: number
    changeValue: (newValue: number) => void
    maxValue: number
    startValue: number
}

export function Buttons(props: ButtonsType) {

    return (
        <div className={'buttonsPanel'}>
            <button className={'inc'}  disabled={props.value === props.maxValue} onClick={()=> props.changeValue( props.value + 1)}>INC</button>
            <button className={'reset'} disabled={props.value === props.startValue} onClick={()=> props.changeValue(props.startValue)}>RESET</button>
        </div>
    );
}

