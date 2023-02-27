import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Projects></Projects>
      <Skills></Skills>
      <AboutMe></AboutMe>
    </div>
  );
};

export default Home;
