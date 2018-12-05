import React, { Component } from 'react'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.handleDelClick = this.handleDelClick.bind(this)
  }

  render() {
    const { item, index } = this.props
    return (
      <li onClick={() => {this.handleDelClick(index)}}>{item}</li>
    )
  }

  handleDelClick(index) {
    this.props.handleDelItem(index)
  }
}

export default TodoItem