import React from "react"

export class Age extends React.Component {
    render() {
        return (
            <div>
                <p>Your Age is: <strong>{this.props.age}</strong>! </p>
            </div>
        )

    }
}