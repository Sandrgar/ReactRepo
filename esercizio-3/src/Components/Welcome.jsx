import React from "react"

export class Welcome extends React.Component{
    static defaultProps = {
        name: "Mario"
      }
    render(){
        return <h1>Hello, {this.props.name}! </h1>
    }
}