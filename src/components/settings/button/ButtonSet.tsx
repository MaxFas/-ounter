import React from 'react';
import '../../../App.css';


type ButtonSetType = {
    onClick: () => void
}

export function ButtonSet(props: ButtonSetType) {



    return (
        <div className={'buttonsPanel'}>
            <button className={'buttonSet'} onClick={props.onClick}>SET</button>
        </div>
    )
}
