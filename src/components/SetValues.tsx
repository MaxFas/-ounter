import React from 'react';
import '.././App.css';

export function SetValues() {
    return (
        <div className={'display'}>
            <div className={'maxValue'}>max value: <input/></div>
            <div className={'startValue'}>start value: <input/></div>
        </div>)
}
