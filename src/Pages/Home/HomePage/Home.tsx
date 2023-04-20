import React from 'react'
import Login from '../Login/Login'
import Messages from '../Messages/Messages'
import Phones from '../Phones/Phones'
import NavMenu from '../NavMenu/NavMenu'
import Footer from '../Footer/Footer'
import DiliveryLocations from '../DiliveryLocation/DiliveryLocations'

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
