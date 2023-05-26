import React from "react"

export class Welcome extends React.Component {
    static defaultProps = {
        name: <strong>Mario</strong>
    }
    render() {
        return (
            <div>
                <p>Hello, {this.props.name}! </p>
            </div>
        )

    }
}