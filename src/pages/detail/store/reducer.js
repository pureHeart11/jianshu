import * as actiontypes from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  title:'',
  content:''
})


export default (state = defaultState, action) => {
  //immutable对象的set方法，会结合之前immutable的对象的值和设置的值，返回一个全新的对象
  switch (action.type) {
    case actiontypes.CHANGE_DETAIL:
      return state.merge({
        title:fromJS(action.title),
        content:fromJS(action.content)
      });
    default:
      return state;
  }
}