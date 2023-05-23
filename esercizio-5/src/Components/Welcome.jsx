import React from "react"

export class Welcome extends React.Component {
    static defaultProps = {
        name: <span>Mario</span>
    }
    render() {
        return (
            <div>
                <p>Hello, <strong>{this.props.name}</strong>! </p>
            </div>
        )

    }
}