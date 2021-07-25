import React from 'react'
import { Route, Switch } from 'react-router-dom'
import About from './About'

const ComA = () => {
  return (
    <>
      <Switch>
        <Route path='/' component={About} />
      </Switch>
      {/* <About />
      <Contact /> */}
    </>
  )
}

export default ComA
