import React from "react"

export class Age extends React.Component {
    render() {
        return (
            <div>
                <p>Your Age is: {this.props.age}! </p>
            </div>
        )

    }
}