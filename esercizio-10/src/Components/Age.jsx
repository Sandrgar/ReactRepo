import React from "react"

export class Age extends React.Component {
    render() {
        return (
            <div>
                 {/* {this.props.age > 18 && this.props.age < 65
                    ? <p>Your age is {this.props.age}</p>
                    : <p>You are declined </p>
                } */}
                {this.props.age > 18 && this.props.age < 65 && <p>your age is {this.props.age}</p>}
            </div>
        )

    }
}