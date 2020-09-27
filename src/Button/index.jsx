import React from 'react'
import * as Styles from './style'

function Button({ onClick, type, shape, size, children }) {
  return (
    <Styles.Button onClick={onClick} type={type} shape={shape} size={size}>
      {children}
    </Styles.Button>
  )
}

export default Button
