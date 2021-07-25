import React from 'react'
import { Route, Switch } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Error from './Error'
import Menu from './Menu'
import Service from './Service'
import User from './User'

const App = () => {
  const Name = () => {
    return <h1> hi i am a Name page</h1>
  }
  return (
    <>
      <Menu />
      <Switch>
        <Route exact path='/' component={() => <About name='About' />} />
        <Route
          exact
          path='/Service'
          render={() => <Service name='Service' />}
        />
        <Route exact path='/contact' component={Contact} />
        <Route path='/contact/Name' component={Name} />
        <Route path='/user/:fname/:lname' component={User} />
        <Route component={Error} />
      </Switch>
      {/* <About />
      <Contact /> */}
    </>
  )
}

export default App
