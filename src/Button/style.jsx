import styled from 'styled-components'

export const Button = styled.button.attrs((props) => ({
  onClick: props.onClick
}))`
  font-size: 17px;
  appearance: none;
  white-space: nowrap;
  word-break: keep-all;
  cursor: pointer;
  line-height: 1;
  position: relative;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 2px;
  opacity: 1;
  font-weight: 500;
  display: inline-block;
  color: ${(props) =>
    props.type === 'primary' || props.type === 'danger'
      ? 'rgb(255, 255, 255)'
      : 'rgb(68, 71, 74)'};
  padding: ${(props) =>
    props.size === 'large'
      ? '16px 64px'
      : props.size === 'small'
      ? '4px 16px'
      : props.size === 'medium'
      ? '8px 32px'
      : '2px 8px'};
  border-radius: ${(props) => (props.shape === 'pill' ? '32px' : '4px')};
  transition: all 0.2s ease-out 0s;
  text-decoration: none;
  background: ${(props) =>
    props.type === 'primary'
      ? 'linear-gradient(to top, #21bf73, #28df99)'
      : props.type === 'danger'
      ? 'linear-gradient(to top, #fd5e53, #fa697c)'
      : 'linear-gradient(to top, rgb(250, 251, 252), rgb(255, 255, 255))'};
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) =>
    props.type === 'primary'
      ? '#21bf73'
      : props.type === 'danger'
      ? '#fa697c'
      : 'rgb(233, 236, 240)'};
  border-image: initial;

  &:hover {
    opacity: 0.9;
  }
`
