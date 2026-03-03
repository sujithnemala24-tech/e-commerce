import React from 'react'
import '../App.css'
import logo from '/vite.svg'
import Navlinks from './Navlinks'

function Header() {
  return (
    <div className="header common">
      <Navlinks />
      <img src = {logo} alt = "logo"/>
      <p>KLU Store</p>
    </div>
  )
}

export default Header
