import React from 'react'
import Login from './Login'
import Messages from './Messages'
import Phones from './Phones'
import NavMenu from './NavMenu'

export const Home = () => {
  return (
    <div>
      <Login />
      <Messages />
      <Phones />
      <NavMenu/>
    </div>
  )
}
