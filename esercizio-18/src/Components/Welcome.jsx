import React from "react";


export class Welcome extends React.Component {
    render() {
        return <>

            <p>{this.props.name}</p>
        </>
    }
}