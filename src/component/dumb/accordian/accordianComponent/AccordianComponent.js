import React, { useState } from "react";
import "./AccordianComponent.css";
import AccordianItem from "../accordianItem/AccordianItem";
import AccordianText from "../accordianText/AccordianText";
import AccordianTitle from "../accordianTitle/AccordianTitle";

const data = [
  {
    title: "What is Netflix?",
    text:
      "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices." +
      "\n" +
      "You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
  },
  {
    title: "How much does Netflix cost?",
    text: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.",
  },
  {
    title: "Where can I watch?",
    text:
      "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles." +
      "\n" +
      "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
  },
  {
    title: "How do I cancel?",
    text: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
  },
  {
    title: "What can I watch on Netflix?",
    text: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
  },
  {
    title: "Is Netflix good for kids?",
    text:
      "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space." +
      "\n" +
      "Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
  },
];

const AccordianComponent = ({ children, ...restProps }) => {
  const [accordianState, setAccordianState] = useState(data.map(() => false));

  return (
    <div className="accordian-component" {...restProps}>
      <h1 className="accordian-heading">Frequently Asked Questions</h1>
      <div className="accordian-wrapper">
        {data.map((item, index) => (
          <AccordianItem>
            <AccordianTitle
              isOpen={accordianState[index]}
              handleClick={() => {
                let currentValue = accordianState[index];
                let newValue = !currentValue;
                let newAccordianState = [...accordianState];
                for (let i = 0; i < accordianState.length; i++) {
                  newAccordianState[i] = false;
                }
                newAccordianState[index] = newValue;
                setAccordianState(newAccordianState);
              }}
            >
              {item.title}
            </AccordianTitle>
            <AccordianText isOpen={accordianState[index]}>
              {item.text}
            </AccordianText>
          </AccordianItem>
        ))}
      </div>
    </div>
  );
};

export default AccordianComponent;
