import React from "react";
import './JumboTitle.css'

const JumboTitle = ({ children, ...restProps }) => {
  return (
    <h1 className="jumbo-title" {...restProps}>
      {children}
    </h1>
  );
};

export default JumboTitle;
