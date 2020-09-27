import React from 'react'
import {
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer,
  DropDownList,
  ListItem
} from './style'

function Dropdown({ items, label }) {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggling = () => setIsOpen(!isOpen)

  return (
    <DropDownContainer>
      <DropDownHeader onClick={toggling}>{label}</DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {items.map((item, index) => {
              return (
                <ListItem key={index} onClick={item.onItemPress}>
                  {item.label}
                </ListItem>
              )
            })}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  )
}

export default Dropdown
