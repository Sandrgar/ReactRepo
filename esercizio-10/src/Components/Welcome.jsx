import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component {
    render() {
        return (
            <div>
                {this.props.name === "Jhon"
                ? <p>Hello, <strong>{this.props.name}</strong>! </p>
                : <h1>Name not valid</h1>}
                <Age age = "20"/>
            </div>
        )

    }
}