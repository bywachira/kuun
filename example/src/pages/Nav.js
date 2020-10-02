import React from 'react'

import { Layout } from 'kuun'

const App = () => {
  return (
    <Layout
      logoPath='https://seller.roko.store/logo.png'
      navItems={[
        { label: 'Menu Item 1', onSelect: () => console.log('Menu item') }
      ]}
    ></Layout>
  )
}

export default App
