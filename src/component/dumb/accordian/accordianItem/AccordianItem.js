import React from 'react'

const AccordianItem = ({children, ...restProps}) => {
  return (
    <div className='accordian-item' {...restProps}>{children}</div>
  )
}

export default AccordianItem