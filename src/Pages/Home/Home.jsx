import React from "react";
import ParticlesApp from "../../Components/Particles/ParticlesApp";
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
      <ParticlesApp />
    </>
  );
};

export default Home;
