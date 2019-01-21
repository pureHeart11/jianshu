import * as actiontypes from './actionTypes'
// import { fromJS } from 'immutable';
import axios from 'axios';

const changeDetail = (title,content)=>({
  type:actiontypes.CHANGE_DETAIL,
  title,
  content
})

export const getDetail = (id)=>{
  return (dispatch) =>{
    axios.get('/api/detail.json?id='+id).then((res)=>{
        const data = res.data.data;
        dispatch(changeDetail(data.title,data.content));
    })
  }
}