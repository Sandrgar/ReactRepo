import React from "react"

export class Age extends React.Component {
    render() {
        return (
            <div>
                 {this.props.age > 18
                ? <p>your age is {this.props.age}! </p>
                : <h1>You are very young!</h1>}
            </div>
        )

    }
}