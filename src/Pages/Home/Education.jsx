import React from "react";
import aiub from "../../Assets/Images//Aiub.png";

const Education = () => {
  return (
    <section>
      <h1 className="text-4xl text-center my-14 font-bold">
        Educational Summary
      </h1>

      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img src={aiub} className="rounded-lg shadow-2xl" alt="aiub" />
          <div>
            <h1 className="text-xl md:text-3xl font-bold sm:pl-10 md:p-0">
              {" "}
              American International University-Bangladesh
            </h1>
            <p className="text-xl py-6">
              BSc in{" "}
              <span className="font-bold">
                Computer Science and Engineering
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
