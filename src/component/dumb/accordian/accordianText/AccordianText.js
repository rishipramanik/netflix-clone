import React from "react";
import "./AccordianText.css";

const AccordianText = ({ children, isOpen, ...restProps }) => {
  return (
    isOpen ? <div className="accordian-text" {...restProps}>
      {children}
    </div> : null
  );
};

export default AccordianText;
