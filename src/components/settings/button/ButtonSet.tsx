import React from 'react';
import '../../../App.css';


type ButtonSetType = {
    onClick: () => void
    errorMin: boolean
    errorMax: boolean
}

export function ButtonSet(props: ButtonSetType) {



    return (
        <div className={'buttonsPanel'}>
            <button disabled={props.errorMin||props.errorMax} className={'buttonSet'} onClick={props.onClick}>SET</button>
        </div>
    )
}
