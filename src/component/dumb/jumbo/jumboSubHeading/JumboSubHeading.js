import React from 'react'
import './JumboSubHeading.css'

const JumboSubHeading = ({ children, ...restProps }) => {
    return (
      <h2 className="jumbo-sub-heading" {...restProps}>
        {children}
      </h2>
    );
  };

export default JumboSubHeading