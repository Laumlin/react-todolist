import React, { Component, Fragment } from 'react'
import { getChangeInputAction, getAddItemAction, getDelItemAction } from './store/actionCreator'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleAddItem = this.handleAddItem.bind(this)
    this.handleDelItem = this.handleDelItem.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.state = store.getState()
    store.subscribe(this.handleStoreChange)
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
    const action = getChangeInputAction(e.target.value)
    store.dispatch(action)
  }

  handleAddItem() {
    const action = getAddItemAction()
    store.dispatch(action)
  }

  handleDelItem(index) {
    const action = getDelItemAction(index)
    store.dispatch(action)
  }

  handleStoreChange() {
    this.setState(store.getState())
  }
}

export default TodoList