import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./style.scss";

const SliderWithCards = ({ children }) => {
  const totalSlides = React.Children.count(children);
  const [currentIndex, setCurrentIndex] = useState(0);

  const properties = {
    nextArrow: currentIndex === totalSlides - 1 ? <button style={{ display: "none" }}></button> : null,
  };

  return (
    <div>
      <Slide
        onChange={(from, to) => {
          setCurrentIndex(to);
        }}
        autoplay={false}
        {...properties}
      >
        {children}
      </Slide>
    </div>
  );
};

export default SliderWithCards;
