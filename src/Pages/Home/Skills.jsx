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
    <>
      <section className="">
        <div className="container p-6 mx-auto space-y-6 text-center lg:p-8 lg:space-y-8">
          <h2 className="text-3xl font-bold">Fully compatible with</h2>
          <div className="flex flex-wrap justify-center lg:justify-between">
            <img
              className="h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0"
              src={html}
              alt=""
            />
            <img
              className="h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0"
              src={css}
              alt=""
            />
            <img
              className="h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0"
              src={js}
              alt=""
            />
            <img
              className="h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0"
              src={react}
              alt=""
            />
            <img
              className="h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0"
              src={node}
              alt=""
            />
            <img
              className="h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0"
              src={mongo}
              alt=""
            />
            <img
              className="h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0"
              src={firebase}
              alt=""
            />
            <img
              className="h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0"
              src={tailwind}
              alt=""
            />
            <img
              className="h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0"
              src={bootstrap}
              alt=""
            />
            <img
              className="h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0"
              src={figma}
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
