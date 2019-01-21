import * as actiontypes from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page:1,
  totalPage:1
})

export default (state = defaultState, action) => {
    //immutable对象的set方法，会结合之前immutable的对象的值和设置的值，返回一个全新的对象
  switch (action.type) {
    case actiontypes.SEARCH_FOCUS:
      return state.set('focused', true);
    case actiontypes.SEARCH_BLUR:
      return state.set('focused', false);
    case actiontypes.CHANGE_LIST:
      // return state.set('list', action.data).set('totalPage', action.totalPage);
      return state.merge({
        list:action.data,
        totalPage: action.totalPage
      })
    case actiontypes.MOUSE_ENTER:
      return state.set('mouseIn', true);
    case actiontypes.MOUSE_LEAVE:
      return state.set('mouseIn', false);
    case actiontypes.CHANGE_PAGE:
      return state.set('page', action.page);
    default:
      return state;
  }
}