import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { ListItem, ListInfo, LoadMore } from '../style'
import { actionCreators } from '../store'
import { Link } from 'react-router-dom'

class List extends PureComponent {
  render() {
    const { list, getMoreList, listPage } = this.props;
    return (
      <div>
        {
          list.map((item, index) => (
            <Link to={'/detail/'+item.get('id')} key={index}>
              <ListItem>
                <img className='pic' src={item.get('imgUrl')} alt="" />
                <ListInfo>
                  <h3 className='title'>{item.get('title')}</h3>
                  <p className='desc'>{item.get('content')}</p>
                </ListInfo>
              </ListItem>
            </Link>

          ))
        }
        <LoadMore onClick={() => getMoreList(listPage)}>加载更多</LoadMore>
      </div>
    )
  }
}
const mapState = (state) => {
  return {
    list: state.getIn(['home', 'list']),
    listPage: state.getIn(['home', 'listPage']),
  }
}
const mapDispatch = (dispatch) => ({
  getMoreList(listPage) {
    dispatch(actionCreators.getMoreList(listPage))
  }
})

export default connect(mapState, mapDispatch)(List);