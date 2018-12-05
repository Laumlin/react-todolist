import React, { Component, Fragment } from 'react'
import { Input, Button, List } from 'antd'

// 无状态组件，只有props属性，一般只用来显示视图，性能好
const TodoListUI = (props) => {
  return (
    <Fragment>
      <div>
        <Input 
        style={{ marginRight: 5, marginTop: 10, marginLeft: 10, width: 300}}
        type="text"
        value={props.inputValue}
        onChange={props.handleInputChange} />
        <Button type="primary" onClick={props.handleAddItem}>添加</Button>
      </div>
      <List
        style={{marginLeft: 10, marginTop: 10, width: 300}}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (<List.Item onClick={() => props.handleDelItem(index)}>{item}</List.Item>)}>
      </List>
    </Fragment>
  )
}

// 有状态组件，同时有state和props，一般包含逻辑的处理
/*
class TodoListUI extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Fragment>
        <div>
          <Input 
          style={{ marginRight: 5, marginTop: 10, marginLeft: 10, width: 300}}
          type="text"
          value={this.props.inputValue}
          onChange={this.props.handleInputChange} />
          <Button type="primary" onClick={this.props.handleAddItem}>添加</Button>
        </div>
        <List
          style={{marginLeft: 10, marginTop: 10, width: 300}}
          bordered
          dataSource={this.props.list}
          renderItem={(item, index) => (<List.Item onClick={() => this.props.handleDelItem(index)}>{item}</List.Item>)}>
        </List>
      </Fragment>
    )
  }
}
*/
export default TodoListUI
