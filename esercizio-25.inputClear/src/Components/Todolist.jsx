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

    render() {
        return (
            <div>
                <ul>
                    {this.state.arr.map((element, index) => {
                        return <li key={index}>{element}</li>
                    })}
                </ul>
                <input value={this.state.inputValue} type="text" name="add" onChange={this.handleInputChange} />
                <button  onClick={this.handleAdd}>Add</button>
            </div>
        )
    }
}