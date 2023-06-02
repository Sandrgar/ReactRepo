import React from "react";
import { Welcome } from "./Welcome";

export class InteractiveWelcome extends React.Component {
    state = {
        text: ""
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({ text: event.target[0].value })
        
    }
    render() {
        return <>
            <form onSubmit={this.handleSubmit}>
                <input type="text" />
                <button type="submit">Submit</button>
                <Welcome name={this.state.text} />
            </form>
        </>
    }
}