import React from "react";
import JumboImage from "../jumboImage/JumboImage";
import JumboSubHeading from "../jumboSubHeading/JumboSubHeading";
import JumboTitle from "../jumboTitle/JumboTitle";
import './JumboItem.css'

const JumboItem = ({
  children,
  alignment,
  title,
  subheading,
  imagesrc,
  imageAlt,
  ...restProps
}) => {
  return (
    <div className="jumbo-item">
      <div>
        <JumboTitle>{title}</JumboTitle>
        <JumboSubHeading>{subheading}</JumboSubHeading>
      </div>
      <div>
        <JumboImage src={imagesrc} alt={imageAlt} />
      </div>
    </div>
  );
};

export default JumboItem;
