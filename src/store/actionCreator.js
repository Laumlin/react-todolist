import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DEL_TODO_ITEM, INIT_TODO_LIST, GET_INIT_LIST } from './actionTypes'
import axios from 'axios';

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

// export const getInitList = () => {
//   return (dispatch) => {
//     axios.get('/list.json')
//       .then(res => {
//         const data = res.data
//         const action = getInitTodoListAction(data)
//         dispatch(action)
//       })
//   }
// }

export const getInitListAction = () => ({
  type: GET_INIT_LIST
})