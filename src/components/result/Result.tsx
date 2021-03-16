import {Display} from "./display/Display";
import {Buttons} from "./buttons/Buttons";
import React from "react";

export type ResultType = {
    value: number
    maxValue: number
    startValue: number
    error: string
    changeValue: (newValue: number) => void
}

export function Result(props: ResultType) {
        return (
        <div>
            <Display value={props.value} maxValue={props.maxValue} error={props.error}/>
            <Buttons value={props.value} changeValue={props.changeValue} startValue={props.startValue} maxValue={props.maxValue}/>
        </div>
        )
}
