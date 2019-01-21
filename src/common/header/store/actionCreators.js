import * as actiontypes from './actionTypes'
import { fromJS } from 'immutable';
import axios from 'axios';

const changeList = (data)=>({
  type:actiontypes.CHANGE_LIST,
  data:fromJS(data),
  totalPage:Math.ceil(data.length / 10)
})

export const searchFocus = ()=>({
  type:actiontypes.SEARCH_FOCUS
})

export const searchBlur = ()=>({
  type:actiontypes.SEARCH_BLUR
})

export const mouseEnter = ()=>({
  type:actiontypes.MOUSE_ENTER
})
export const mouseLeave = ()=>({
  type:actiontypes.MOUSE_LEAVE
})
export const changePage = (page)=>({
  type:actiontypes.CHANGE_PAGE,
  page
})

export const getList = ()=>{
  return (dispatch) =>{
    axios.get('/api/headerList.json').then((res)=>{
        const action = changeList(res.data)
        dispatch(action);
    }).catch(()=>{
      console.log("err");
    })
  }
}