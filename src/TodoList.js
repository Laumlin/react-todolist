import React, { Component, Fragment } from 'react'
import 'antd/dist/antd.css'
import { Input } from 'antd'
import TodoItem from './TodoItem'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleAddItem = this.handleAddItem.bind(this)
    this.handleDelItem = this.handleDelItem.bind(this)
  }

  render() {
    const { inputValue, list } = this.state
    return (
      <Fragment>
        <div>
          <Input 
          style={{marginTop: 10, marginLeft: 10, width: 300}}
          type="text"
          value={inputValue}
          onChange={this.handleInputChange} />
          <button onClick={this.handleAddItem}>添加</button>
        </div>
        <ul>
          {list.map((item, index) => (<TodoItem key={index} index={index} item={item} handleDelItem={this.handleDelItem}/>))}
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

  handleDelItem(index) {
    this.setState((prevState) => {
      const newState = prevState
      newState.list.splice(index, 1)
      return {newState}
    })
  }
}

export default TodoList