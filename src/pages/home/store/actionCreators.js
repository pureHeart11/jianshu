import * as actiontypes from './actionTypes'
import { fromJS } from 'immutable';
import axios from 'axios';

const changeHomeData = (result) =>({
  type: actiontypes.CHANGE_HOME_DATA,
  topicList: result.topicList,
  list: result.list,
  recommendList: result.recommendList,
})
const addHomeList = (list,listPage) =>({
  type: actiontypes.ADD_HOME_LIST,
  list: fromJS(list),
  listPage
})

export const getHomeInfo = ()=>{
  return (dispatch) =>{
    axios.get('/api/home.json').then((res) => {
      let result = res.data.data;
      dispatch(changeHomeData(result));
    })
  }
}
export const getMoreList = (listPage)=>{
  return (dispatch) =>{
    axios.get('/api/homeList.json?page='+listPage).then((res) => {
      let result = res.data.data.list;
      dispatch(addHomeList(result,listPage + 1));
    })
  }
}
export const toggleTopShow = (show)=>({
  type:actiontypes.TOGGLE_SCROLL_TOP,
  show
})