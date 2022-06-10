import React from "react";
import "./SignText.css";

const SignText = ({ children, ...restProps }) => {
  return (
    <p className="sign-text" {...restProps}>
      {children}
    </p>
  );
};

export default SignText;
