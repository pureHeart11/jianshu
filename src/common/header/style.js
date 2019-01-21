import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
  position:relative;
  height:58px;
  border-bottom:1px solid #f0f0f0
`
export const Logo = styled.div`
  position:absolute;
  top:0;
  left:0;
  width:100px;
  height:56px;
  display:block;
  background:url(${logoPic});
  background-size:contain;
  cursor:pointer;
`
export const Nav = styled.div`
  width:960px;
  height:100%;
  margin:0 auto;
  box-sizing:border-box;
  padding-right:50px;
`
export const NavItem = styled.div`
  line-height:56px;
  padding:0 15px;
  font-size:17px;
  color:#333;
  &.left{
    float:left;
  }
  &.right{
    float:right;
    color:#969696
  }
  &.active{
    color:#ea6f5a;
  }
`
export const SearchWrapper = styled.div`
  position:relative;
  float:left;
  .zoom{
    position:absolute;
    right:5px;
    bottom:5px;
    width:30px;
    line-height:30px;
    border-radius:15px;
    text-align:center;
    &.focused{
      color: #fff;
      background-color: #969696;
    }
  }
`
export const NavSearch = styled.input.attrs({
  placeholder:'搜索'
})`
  width:160px;
  height:38px;
  color:#666;
  padding:0 40px 0 20px;
  box-sizing:border-box;
  border:1px solid #eee;
  outline:none;
  border-radius:19px;
  margin-top:9px;
  background:#eee;
  font-size:14px;
  margin-left:20px;
  &::placeholder{
    color:#999;
  }
  &.focesed{
    width:240px;
  }
  &.slide-enter{
    transition:all .2s ease-out
  }
  &.slide-enter-active{
    width:240px;
  }
  &.slide-exit{
    transition:all .2s ease-out
  }
  &.slide-exit-active{
    width:160px;
  }
`
export const SearchInfo = styled.div`
  position:absolute;
  left:0;
  top:56px;
  width:240px;
  padding:0 20px;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  border-radius: 4px;
  margin-top: 9px;
`
export const SearchInfoSwitch = styled.span`
  float:right;
  font-size:13px
  cursor:pointer;
  .spin{
    display:block;
    float:left;
    font-size:12px;    
    margin-right:2px;
    transition:all .2s ease-in;
    transition-origin:center center;
  }
`
export const SearchInfoItem = styled.a`
  cursor: pointer;
  float:left;
  font-size:12px;
  padding:0 5px;
  line-height:20px;
  border:1px solid #ddd;
  color:#787878;
  display:block;
  border-radius:3px;
  margin-right:10px;
  margin-bottom:15px;
`
export const SearchInfoTitle = styled.div`
  margin-top:20px;
  margin-bottom:15px;
  line-height:28px;
  font-size:14px;
  color:#969696;

`
export const Addition = styled.div`
  position:absolute;
  right:0;
  top:0;
  height:56px;
`
export const Button = styled.div`
  float:right;
  line-height:38px;
  border-radius:19px;
  margin-top:9px;
  margin-right:20px;
  padding:0 20px;
  border:1px solid #ec6149;
  font-size:14px;
  &.reg{
    color:#ec6149;
  }
  &.writting{
    color:#fff;
    background:#ec6149;
  }
`
