import React from "react";

export class Welcome extends React.Component{
    render(){
        return <p>Ciao: {this.props.name}</p>
    }
}