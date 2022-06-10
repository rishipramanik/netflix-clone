import React from "react";
import Separator from "../../separator/Separator";
import JumboItem from "../jumboItem/JumboItem";
import './JumboComponent.css'


const data = [
  {
    title: "Enjoy on your TV.",
    subheading:
      "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
    imagesrc: "../../../../images/home/tv.png",
  },
  {
    title: "Download your shows to watch offline.",
    subheading:
      "Save your favourites easily and always have something to watch.",
    imagesrc: "../../../../images/home/mobile.jpg",
  },
  {
    title: "Watch everywhere.",
    subheading:
      "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    imagesrc: "../../../../images/home/device-pile-in.png",
  },
  {
    title: "Create profiles for children.",
    subheading:
      "Send children on adventures with their favourite characters in a space made just for them—free with your membership.",
    imagesrc: "../../../../images/home/kids.png",
  },
];

const JumboComponent = () => {
  return (
    <div className="jumbo-component">
      {data.map((item:{...}, index:number) => (
        <>
        <JumboItem
          alignment={index%2===0}
          title={item.title}
          subheading={item.subheading}
          imagesrc={item.imagesrc}
        />
        <Separator />
        </>
      ))}
    </div>
  );
};

export default JumboComponent;
