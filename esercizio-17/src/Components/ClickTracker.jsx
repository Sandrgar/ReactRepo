import React from 'react'

export class ClickTracker extends React.Component{
    state = {
        click: "" 
    }
    
    handleClick = (event) => {
       this.setState ({click: event.target.id})
    }
    render(){
        return <>
           <button id="1" onClick={this.handleClick}>One</button>
           <button id="2"onClick={this.handleClick}>Two</button>
           <button id="3"onClick={this.handleClick}>Three</button>
           <h1>Last button clicked: {this.state.click}</h1>
        </>
    }
}