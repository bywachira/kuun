import React from 'react'
import * as Styles from './styles'

function Title({ size, children }) {
  return (
    <React.Fragment>
      {size === 4 ? (
        <Styles.Title4>{children}</Styles.Title4>
      ) : size === 3 ? (
        <Styles.Title3>{children}</Styles.Title3>
      ) : size === 2 ? (
        <Styles.Title2>{children}</Styles.Title2>
      ) : (
        <Styles.Title1>{children}</Styles.Title1>
      )}
    </React.Fragment>
  )
}

function Paragraph({ strong, color, children, size }) {
  return (
    <Styles.Paragragh strong={strong} color={color} size={size}>
      {children}
    </Styles.Paragragh>
  )
}

export { Title, Paragraph }
