import * as actiontypes from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [],
  list: [],
  recommendList: [],
  listPage: 1,
  showScroll: false
})

const changeHomeData = (state,action)=>{
  return state.merge({
    topicList: fromJS(action.topicList),
    list: fromJS(action.list),
    recommendList: fromJS(action.recommendList)
  })
}
const addHomeList = (state,action)=>{
  return state.merge({
    list: state.get('list').concat(action.list),
    listPage: action.listPage
  })
}

export default (state = defaultState, action) => {
  //immutable对象的set方法，会结合之前immutable的对象的值和设置的值，返回一个全新的对象
  switch (action.type) {
    case actiontypes.CHANGE_HOME_DATA:
      return changeHomeData(state,action)
    case actiontypes.ADD_HOME_LIST:
      return addHomeList(state,action)
    case actiontypes.TOGGLE_SCROLL_TOP:
      return state.set('showScroll',action.show)
    default:
      return state;
  }
}