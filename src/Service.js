import React from 'react'
//import { useEffect } from 'react'
const Service = (props) => {
  // useEffect(() => {
  //   document.addEventListener('click', handleClick)
  //   return function cleanup() {
  //     document.removeEventListener('click', handleClick)
  //   }
  // })

  // function handleClick() {
  //   console.log('hi i am called again service useEffect')
  // }
  // console.log('hi i am called again service local')
  return (
    <>
      <h1>Hello, I am a {props.name} page</h1>
    </>
  )
}

export default Service
