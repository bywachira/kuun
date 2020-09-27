import styled from 'styled-components'

export const DropDownContainer = styled.div`
  width: ${(props) => (props.width ? props.width : '10.5em')};
  outline: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

export const DropDownHeader = styled.div`
  // margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0, 15);
  font-weight: 500;
  font-size: 16px;
  text-align: left;
  cursor: pointer;
  color: rgb(68, 71, 74);
  background: linear-gradient(to top, rgb(250, 251, 252), rgb(255, 255, 255));
`

export const DropDownListContainer = styled.div``

export const DropDownList = styled.ul`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: linear-gradient(to top, rgb(250, 251, 252), rgb(255, 255, 255));
  border-bottom: 1px solid rgb(233, 236, 240);
  border-right: 1px solid rgb(233, 236, 240);
  border-left: 1px solid rgb(233, 236, 240);
  box-sizing: border-box;
  color: rgb(68, 71, 74);
  font-size: 16px;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`

export const ListItem = styled.li.attrs((props) => ({
  onClick: props.onClick
}))`
  list-style: none;
  margin-bottom: 0.8em;
  cursor: pointer;
`
