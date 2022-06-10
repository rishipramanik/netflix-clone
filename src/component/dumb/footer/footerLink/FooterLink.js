import React from 'react'
import './FooterLink.css'

const FooterLink = ({children, ...restProps}) => {
  return (
    <a href='#' className='footer-link' {...restProps}>
        {children}
    </a>
  )
}

export default FooterLink