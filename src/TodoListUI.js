import React, { Component, Fragment } from 'react'
import { Input, Button, List } from 'antd'

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

export default TodoListUI
