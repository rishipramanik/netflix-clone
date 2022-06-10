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
    <div className="jumbo-item">{
      alignment === true && (
        <div>
        <JumboTitle>{title}</JumboTitle>
        <JumboSubHeading>{subheading}</JumboSubHeading>
      </div>
      )
    }
    {
      alignment === false && (
        <div className="jumbo-image-wrapper">
        <JumboImage src={imagesrc} alt={imageAlt} />
      </div>
      )
    }
    {
      alignment === true && (
        <div>
        <JumboImage src={imagesrc} alt={imageAlt} />
      </div>
        
      )
    }
    {
      alignment === false && (
        <div>
        <JumboTitle>{title}</JumboTitle>
        <JumboSubHeading>{subheading}</JumboSubHeading>
      </div>
      )
    }
      
      
    </div>
  );
};

export default JumboItem;
