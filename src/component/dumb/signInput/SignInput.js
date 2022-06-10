import React from 'react'
import './SignInput.css'

const SignInput = ({...restProps}) => {
  return (
    <input className='sign-input' {...restProps} />
  )
}

export default SignInput