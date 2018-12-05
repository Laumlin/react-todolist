import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DEL_TODO_ITEM } from './actionTypes'
const defaultState = {
  inputValue: '',
  list: []
}

export default (state=defaultState, action) => {
  if (action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state)) // 拷贝state
    newState.inputValue = action.inputValue
    return newState
  }
  if (action.type === ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    const inputValue = newState.inputValue
    newState.list.push(inputValue)
    newState.inputValue = ''
    return newState
  }
  if (action.type === DEL_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    const index = action.index
    newState.list.splice(index, 1)
    return newState
  }
  return state
}