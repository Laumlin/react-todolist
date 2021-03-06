import React, { Component } from 'react'
import { getChangeInputAction, getAddItemAction, getDelItemAction, getInitListAction } from './store/actionCreator'
import 'antd/dist/antd.css'
import store from './store'
import TodoListUI from './TodoListUI'

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
    return <TodoListUI 
      inputValue={inputValue}
      list={list}
      handleInputChange={this.handleInputChange}
      handleAddItem={this.handleAddItem}
      handleDelItem={this.handleDelItem} 
    />
  }

  componentDidMount() {
    const action = getInitListAction()
    store.dispatch(action)
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