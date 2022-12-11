import React from "react";
import aiub from "../../Assets/Images//Aiub.png";

const Education = () => {
  return (
    <section id="about" className="my-5">
      <section>
        <h1 className="text-2xl text-center mt-10 font-bold">
          Educational Summary
        </h1>
        <div className="p-2 sm:p-2 ">
          <div className="flex flex-col justify-center items-center space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
            <img
              src={aiub}
              alt=""
              className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-star"
            />
            <div className="flex flex-col">
              <h4 className="text-lg font-semibold text-center md:text-left">
                American International University-Bangladesh
              </h4>
              <p className="text-gray">
                BSc in Computer Science and Engineering
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Education;
