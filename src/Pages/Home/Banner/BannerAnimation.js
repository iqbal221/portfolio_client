import React from "react";
import { TypeAnimation } from "react-type-animation";

const BannerAnimation = () => {
  return (
    <TypeAnimation
      // Same String at the start will only be typed once, initially
      sequence={[
        "MERN STACK DEVELOPER",
        1000,
        "MERN STACK DEVELOPER",
        1000,
        "FRONT END DEVELOPER",
        1000,
        "REACT JS DEVELOPER",
        1000,
        "JAVASCRIPT DEVELOPER",
        1000,
      ]}
      speed={50} // Custom Speed from 1-99 - Default Speed: 40
      style={{ fontSize: "1em" }}
      wrapper="div" // Animation will be rendered as a <span>
      repeat={Infinity} // Repeat this Animation Sequence infinitely
    />
  );
};

export default BannerAnimation;
