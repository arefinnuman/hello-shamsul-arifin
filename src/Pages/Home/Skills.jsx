import React from "react";
import bootstrap from "../../Assets/Skills/bootstrap.png";
import css from "../../Assets/Skills/css.png";
import figma from "../../Assets/Skills/figma.png";
import firebase from "../../Assets/Skills/firebase.png";
import html from "../../Assets/Skills/html.png";
import js from "../../Assets/Skills/javascript.png";
import mongo from "../../Assets/Skills/mongodb.png";
import node from "../../Assets/Skills/node.png";
import react from "../../Assets/Skills/react.png";
import tailwind from "../../Assets/Skills/tailwind.png";

const Skills = () => {
  return (
    <section>
      <h1 className="text-5xl font-extrabold mt-14 text-center">
        Technologies That I am using
      </h1>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-2 mt-10 ">
        <img className="w-28" src={html} alt="" />
        <img className="w-28" src={css} alt="" />
        <img className="w-28" src={js} alt="" />
        <img className="w-28" src={react} alt="" />
        <img className="w-28" src={node} alt="" />
        <img className="w-28" src={mongo} alt="" />
        <img className="w-28" src={firebase} alt="" />
        <img className="w-28" src={tailwind} alt="" />
        <img className="w-28" src={bootstrap} alt="" />
        <img className="w-24" src={figma} alt="" />
      </div>
    </section>
  );
};

export default Skills;
