import React from "react"

export class Login extends React.Component {

    state = {
        username: "",
        password: ""
    }
    onLogin = (event) => {
        event.preventDefault()
        this.setState({ [event.target.name]: event.target.value })

    }

    handleLogin = () => {
        console.log(this.state)
    }

    handlePrevent = (event) => {
        event.preventDefault()
    }

    handleReset = () => {
        this.setState({
            username: "",
            password: ""
        })
    }


    render() {
        return <div>
            <form onSubmit={this.handlePrevent}>
                <input name="username" type="username" onChange={this.onLogin} value={this.state.username}/>
                <input name="password" type="password" onChange={this.onLogin} value={this.state.password}/>
                <button onClick={this.handleLogin} disabled={!this.state.username || !this.state.password}>Login</button>
                <button type="reset" onClick={this.handleReset}>Reset</button>
            </form>
        </div>
    }
}