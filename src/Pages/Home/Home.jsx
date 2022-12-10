import React from "react";
import Education from "./Education";
import HomeForm from "./HomeForm";
import HomeHero from "./HomeHero";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
  return (
    <>
      <HomeHero />
      <Skills />
      <Projects />
      <Education />
      <HomeForm />
    </>
  );
};

export default Home;
