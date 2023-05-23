import React from "react"

export class Welcome extends React.Component {
    static defaultProps = {
        name: "Mario"
    }
    render() {
        return (
            <div>
                <h1>Hello, {this.props.name}! </h1>
                <p>Your age is: {this.props.age}</p>
            </div>
        )

    }
}