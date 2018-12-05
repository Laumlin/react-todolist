import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DEL_TODO_ITEM } from './actionTypes'

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
