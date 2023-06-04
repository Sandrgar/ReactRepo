import React from "react"

export class Todolist extends React.Component {
    state = {
        arr: this.props.fruits,
        inputValue: ''
    }

    handleAdd = () => {
        const newArray = [...this.state.arr, this.state.inputValue]
        this.setState({
            arr: newArray,
            inputValue: ''
        })
    }

    handleInputChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }

    handleReset = () => {
        this.setState({
            arr: []
        })
    }


    render() {
        return (
            <div>
                <ul>
                    {this.state.arr.map((element, index) => {
                        return <li key={index}>{element}</li>
                    })}
                </ul>
                <input type="text" name="add" value={this.state.inputValue} onChange={this.handleInputChange} />
                <button onClick={this.handleAdd}>Add</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}