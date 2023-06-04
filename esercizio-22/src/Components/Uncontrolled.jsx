import React, { createRef } from "react"



export class Uncontrolled extends React.Component {
    _formRef = createRef()

    componentDidMount = () => {
        this._formRef.current.elements.username.focus()
    }
   
    

    handleSubmit = (event) => {
        event.preventDefault()
        const username = this._formRef.current.elements.username.value
        const password = this._formRef.current.elements.password.value

        console.log(username, password)
    }

    handleReset = () => {
        this._formRef.current.elements.username.value = ""
        this._formRef.current.elements.password.value = ""
    }

    render() {
        
        return <form ref = {this._formRef} onSubmit={this.handleSubmit}>
            <input type="text" name="username" />
            <input type="password" name="password" />
            <button>Login</button>
            <button onClick={this.handleReset}>Reset</button>
        </form>
    }
}