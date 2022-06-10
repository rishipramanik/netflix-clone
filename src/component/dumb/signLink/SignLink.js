import React from "react";
import './SignLink.css'

const SignLink = ({ children, ...restProps }) => {
  return (
    <a className="sign-link" {...restProps}>
      {children}
    </a>
  );
};

export default SignLink;
