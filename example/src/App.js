import React from 'react'
import { Section, Flex, SectionTitle } from './styles'

// import { ExampleComponent } from 'kuun'
import { Button } from 'kuun'
import 'kuun/dist/index.css'

const App = () => {
  return (
    <>
      <Section>
        <SectionTitle>Buttons</SectionTitle>
        <Flex>
          <Button onClick={() => {}} type='danger' size='medium' shape=''>
            Danger
          </Button>
          <Button onClick={() => {}} type='primary' size='medium' shape=''>
            Primary
          </Button>
          <Button onClick={() => {}} type='default' size='medium' shape=''>
            Default
          </Button>
          <Button onClick={() => {}} type='primary' size='compact' shape=''>
            Compact
          </Button>
          <Button onClick={() => {}} type='primary' size='small' shape=''>
            Small
          </Button>
          <Button onClick={() => {}} type='primary' size='medium' shape=''>
            Medium
          </Button>
          <Button onClick={() => {}} type='primary' size='large' shape=''>
            Large
          </Button>
          <Button onClick={() => {}} type='primary' size='large' shape='pill'>
            Pill
          </Button>
        </Flex>
      </Section>
    </>
  )
}

export default App
