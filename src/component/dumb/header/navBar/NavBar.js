import React from 'react'
import './NavBar.css'

const NavBar = ({children, ...restProps}) => {
  return (
    <nav {...restProps}>
        {children}
    </nav>
  )
}

export default NavBar