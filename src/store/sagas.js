import { put, takeEvery } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'
import { getInitTodoListAction } from './actionCreator'
import axios from 'axios'

function* getInitList() {
  try {
    const res = yield axios.get('/list.json')
    const action = getInitTodoListAction(res.data)
    yield put(action)
  } catch(e) {
    console.log('list.json 连接网络失败')
  }
}

function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitList)
}

export default mySaga