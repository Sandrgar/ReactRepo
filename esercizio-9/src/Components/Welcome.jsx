import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component {
    static defaultProps = {
        name: <span>Mario</span>
    }
    render() {
        return (
            <div>
                <p>Hello, <strong>{this.props.name}</strong>! </p>
                <Age age = "20"/>
            </div>
        )

    }
}