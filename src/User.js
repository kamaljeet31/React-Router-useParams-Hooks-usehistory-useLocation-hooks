import React from 'react'
import { useParams, useLocation, useHistory } from 'react-router-dom'

const User = () => {
  const { fname, lname } = useParams()
  const location = useLocation()
  const history = useHistory()
  return (
    <>
      <h1>
        user {fname} {lname} page
        <br />
        <p>my {location.pathname}</p>
        {location.pathname === `/user/kamal/jeet` ? (
          <button onClick={() => history.push('/')}>click me</button>
        ) : null}
      </h1>
    </>
  )
}

export default User
