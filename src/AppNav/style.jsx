import styled from 'styled-components'

export const Layout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
`

export const MainContent = styled.div`
    padding-top: 64px;
    overflow-x: scroll;
    overflow-y scroll;

    &::-webkit-scrollbar {
        // width: 10px;
    }

    &::-webkit-scrollbar-track {
        background: #f1f1f1;
    }
      
    &::-webkit-scrollbar-thumb {
    background: #888;
    }
    
    
    &::-webkit-scrollbar-thumb:hover {
    background: #555;
    }
`

export const NavHolder = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 16px;
  place-items: center;
  color: ${(props) => (!props.type ? 'rgb(68, 71, 74)' : '#fff')}
  top: 0;
  left: 0;
  height: ${(props) => (props.height ? props.height : '48px')};
  position: ${(props) => (props.sticky ? 'fixed' : 'absolute')};
  z-index: 999;
  background: ${(props) =>
    props.type === 'danger'
      ? 'linear-gradient(to top, #fd5e53, #fa697c)'
      : props.type === 'primary'
      ? 'linear-gradient(to top, #21bf73, #28df99)'
      : 'linear-gradient(to top, rgb(250, 251, 252), rgb(255, 255, 255))'};
`

export const NavLogo = styled.div`
  width: 2rem;
  height: 2rem;
  transition: 0.5s all;

  &:hover {
    opacity: 0.9;
  }

  img {
    width: 40px;
  }
`

export const NavItems = styled.div`
  display: flex;
  justify-content: space-evenly;
    margin-right: 32px;
`

export const NavItem = styled.div`
  font-size: 16px;
`
