import React from 'react'
import {Link} from 'react-router-dom'

const Logo = () => {
  return (
    <div className="logo">
      <Link to={'/'}>
        <img src='assets/images/logo-sm.png' alt="" className="logo-small"/>
        <img src='assets/images/logo.png' alt="" className="logo-large"/>
      </Link>
    </div>
  )
}

export default Logo
