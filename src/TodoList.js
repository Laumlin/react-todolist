import React, { Component, Fragment } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
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
          style={{ marginRight: 5, marginTop: 10, marginLeft: 10, width: 300}}
          type="text"
          value={inputValue}
          onChange={this.handleInputChange} />
          <Button type="primary" onClick={this.handleAddItem}>添加</Button>
        </div>
        <List
          style={{marginLeft: 10, marginTop: 10, width: 300}}
          bordered
          dataSource={list}
          renderItem={(item, index) => (<List.Item onClick={() => this.handleDelItem(index)}>{item}</List.Item>)}>
        </List>
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