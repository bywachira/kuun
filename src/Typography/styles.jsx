import styled from 'styled-components'

export const Title1 = styled.h1`
  font-size: 40px;
`

export const Title2 = styled.h2`
  font-size: 32px;
`

export const Title3 = styled.h3`
  font-size: 24px;
`

export const Title4 = styled.h4`
  font-size: 20px;
`
export const Paragragh = styled.p`
  color: ${(props) => (props.color ? props.color : '#000')};
  font-weight: ${(props) => (props.strong ? 'bold' : 'normal')};
  size: ${(props) => (props.size ? props.size : '16px')};
`
