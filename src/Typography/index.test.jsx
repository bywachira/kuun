import React from 'react'
import enzyme, { mount } from 'enzyme'
import toJSON from 'enzyme-to-json'
import adapter from 'enzyme-adapter-react-16'
import { Title, Paragraph } from '.'

enzyme.configure({ adapter: new adapter() })

describe('#TYPOGRAPHY_TITLE', () => {
  it('should render', () => {
    const component1 = mount(<Title size={4}>Tiny Title</Title>)
    const component2 = mount(<Title size={3}>Small Title</Title>)
    const component3 = mount(<Title size={2}>Medium Title</Title>)
    const component4 = mount(<Title>Large Title</Title>)

    expect(toJSON(component1)).toMatchSnapshot()
    expect(toJSON(component2)).toMatchSnapshot()
    expect(toJSON(component3)).toMatchSnapshot()
    expect(toJSON(component4)).toMatchSnapshot()
  })
})

describe('#TYPOGRAPHY_PARAGRAPH', () => {
  it('should render', () => {
    const component = mount(<Paragraph strong={true} color='red' />)

    expect(toJSON(component)).toMatchSnapshot()
  })
})
