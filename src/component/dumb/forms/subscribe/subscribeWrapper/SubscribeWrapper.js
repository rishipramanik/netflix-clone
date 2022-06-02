import React from 'react'
import './SubscribeWrapper.css'

const SubscribeWrapper = ({children, ...restProps}) => {
  return (
    <div className='subscribe-wrapper' {...restProps}>{children}</div>
  )
}

export default SubscribeWrapper