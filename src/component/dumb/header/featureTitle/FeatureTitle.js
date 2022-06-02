import React from "react";
import "./FeatureTitle.css";

const FeatureTitle = ({ children, ...restProps }) => {
  return <h1 {...restProps}> {children}</h1>;
};

export default FeatureTitle;
