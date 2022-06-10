import React from "react";
import './AccordianTitle.css'

const AccordianTitle = ({ children, isOpen, handleClick, ...restProps }) => {
  return (
    <div className="accordian-title" {...restProps} onClick={()=>handleClick()}>
      {children}
      {isOpen == true && (
        <img className="accordian-icon" src={"images/icons/close.png"} />
      )}
      {isOpen == false && (
        <img className="accordian-icon" src={"images/icons/plus.png"} />
      )}
    </div>
  );
};

export default AccordianTitle;
