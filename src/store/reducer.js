const defaultState = {
  inputValue: '',
  list: []
}

export default (state=defaultState, action) => {
  if (action.type === 'change_input_value') {
    const newState = JSON.parse(JSON.stringify(state)) // 拷贝state
    newState.inputValue = action.inputValue
    return newState
  }
  if (action.type === 'add_todo_item') {
    const newState = JSON.parse(JSON.stringify(state))
    const inputValue = newState.inputValue
    newState.list.push(inputValue)
    return newState
  }
  if (action.type === 'del_todo_item') {
    const newState = JSON.parse(JSON.stringify(state))
    const index = action.index
    newState.list.splice(index, 1)
    return newState
  }
  return state
}