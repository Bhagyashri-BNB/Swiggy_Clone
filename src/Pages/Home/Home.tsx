import React from 'react'
import Login from './Login'
import Messages from './Messages'
import Phones from './Phones'
import NavMenu from './NavMenu'
import Footer from './Footer'
import DiliveryLocations from './DiliveryLocations'

export const Home = () => {
  return (
    <div>
      <Login />
      <Messages />
      <Phones />
      <NavMenu/>
      <DiliveryLocations />
      <Footer />
      
    </div>
  )
}
