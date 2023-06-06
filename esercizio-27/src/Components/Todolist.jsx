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

    handleDelete = (index) => {
        const newArray = this.state.arr.filter((element, i) => {
            return i !== index
        })
        this.setState({ arr: newArray })
    }


    render() {
        return (
            <div>
                <ul>
                   {this.props.render(this.state.arr, this.handleDelete)}
                </ul>
                <input type="text" name="add" value={this.state.inputValue} onChange={this.handleInputChange} />
                <button onClick={this.handleAdd}>Add</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}