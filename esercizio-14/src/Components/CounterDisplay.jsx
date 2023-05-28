import React from "react";
import { Counter } from "./Counter";

export class CounterDisplay extends React.Component{
    render(){
        return <h1>Count: {this.props.count} </h1>
    }
}