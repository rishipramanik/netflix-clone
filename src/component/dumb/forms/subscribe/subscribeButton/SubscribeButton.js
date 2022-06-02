import React from "react";
import "./SubscribeButton.css";

const SubscribeButton = ({ children, ...restProps }) => {
  return (
    <div className="subscribe-button">
      <a  href="./signup" {...restProps}>
        {children}
      <img className="subscribe-btn-image" src="../../../../../images/icons/Rightarrow.png" alt="Try Now" />
      </a>
    </div>
  );
};

export default SubscribeButton;
