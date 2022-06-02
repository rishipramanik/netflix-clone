import React from "react";
import './FeatureWrapper.css';

const FeatureWrapper = ({ children, ...restProps }) => {
  return <div {...restProps}>{children}</div>;
};

export default FeatureWrapper;
