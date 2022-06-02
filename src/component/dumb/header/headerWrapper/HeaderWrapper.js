import React from 'react'
import './HeaderWrapper.css'

const HeaderWrapper = ({children, ...restProps}) => {
  return (
    <header className='header-wrapper' {...restProps}>
        {children}
    </header>
  )
}

export default HeaderWrapper