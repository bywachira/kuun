import React from 'react'
import enzyme, { mount } from 'enzyme'
import toJSON from 'enzyme-to-json'
import adapter from 'enzyme-adapter-react-16'
import Button from '.'

enzyme.configure({ adapter: new adapter() })

describe('#BUTTON', () => {
  it('should render properly', () => {
    const component = mount(
      <Button
        onClick={() => {}}
        type='default'
        shape='pill'
        size='large'
        children='children'
      />
    )

    expect(toJSON(component)).toMatchSnapshot()
  })
})
