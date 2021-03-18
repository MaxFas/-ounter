import {Display} from "./display/Display";
import {Buttons} from "./buttons/Buttons";
import React from "react";

export type ResultType = {
    value: number
    maxValue: number
    startValue: number
    errorMin: boolean
    errorMax: boolean
    changeValue: (newValue: number) => void
}

export function Result(props: ResultType) {
        return (
        <div>
            <Display value={props.value} maxValue={props.maxValue} errorMin={props.errorMin} errorMax={props.errorMax}/>
            <Buttons value={props.value} changeValue={props.changeValue} startValue={props.startValue} maxValue={props.maxValue}/>
        </div>
        )
}
