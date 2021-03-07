import React from 'react';
import '.././App.css';

export type ButtonsType = {
    value: number
    changeValue: (newValue: number) => void
}

export function Buttons(props: ButtonsType) {


    return (
        <div className={'buttonsPanel'}>
            <button className={'inc'}  disabled={props.value === 5} onClick={()=> props.changeValue(props.value + 1)}>INC</button>
            <button className={'reset'} disabled={props.value === 0} onClick={()=> props.changeValue(0)}>RESET</button>
        </div>
    );
}

