import React, { Component, Fragment } from 'react'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleAddItem = this.handleAddItem.bind(this)
  }

  render() {
    return (
      <Fragment>
        <div>
          <input 
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange} />
          <button onClick={this.handleAddItem}>添加</button>
        </div>
        <ul>
          {this.state.list.map((item, index) => (<li key={index}>{item}</li>))}
        </ul>
      </Fragment>
    )
  }

  handleInputChange(e) {
    const inputValue = e.target.value
    this.setState(() => {
      return {inputValue}
    })
  }

  handleAddItem() {
    this.setState((prevState) => {
      const newState = prevState
      const inputValue = newState.inputValue
      newState.list.push(inputValue)
      return {newState}
    })
  }
}

export default TodoList