import React from 'react';
import '.././App.css';


type ButtonSetType = {
    changeSetValues: (startValue: number) => void
    startValue: number
}

export function ButtonSet(props: ButtonSetType) {



    return (
        <div className={'buttonsPanel'}>
            <button className={'buttonSet'} onClick={()=> props.changeSetValues(props.startValue)}>SET</button>
        </div>
    )
}
