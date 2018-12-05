import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DEL_TODO_ITEM, INIT_TODO_LIST } from './actionTypes'

export const getChangeInputAction = (inputValue) => ({
  type: CHANGE_INPUT_VALUE,
  inputValue
})

export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM
})

export const getDelItemAction = (index) => ({
  type: DEL_TODO_ITEM,
  index
})

export const getInitTodoListAction = (data) => ({
  type: INIT_TODO_LIST,
  data
})