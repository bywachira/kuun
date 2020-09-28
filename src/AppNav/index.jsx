import React from 'react'
import {
  NavHolder,
  NavItem,
  NavItems,
  NavLogo,
  Layout,
  MainContent
} from './style'
import useSticky from '../hooks/useSticky'

export function AppNav({ isSticky, logoPath, logoLabel, navItems }) {
  return (
    <NavHolder sticky={true}>
      <NavLogo>
        {logoPath ? <img src={logoPath} alt='logo' /> : logoLabel}
      </NavLogo>
      <NavItems>
        {navItems.map((item, index) => {
          return (
            <NavItem key={index} onClick={item.onSelect}>
              {item.label}
            </NavItem>
          )
        })}
      </NavItems>
    </NavHolder>
  )
}

function LayoutComponent({ logoPath, logoLabel, navItems, children }) {
  const { isSticky, element } = useSticky()

  return (
    <Layout>
      <AppNav
        logoPath={logoPath}
        isSticky={isSticky}
        logoLabel={logoLabel}
        navItems={navItems}
      />
      <MainContent ref={element}>{children}</MainContent>
    </Layout>
  )
}

export default LayoutComponent
