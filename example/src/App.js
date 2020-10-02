import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Components from './pages/Components'
import Nav from './pages/Nav'
import Listings from './pages/Listings'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Components} />
        <Route exact path='/components' component={Components} />
        <Route exact path='/nav' component={Nav} />
        <Route exact path='/listings' component={Listings} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
