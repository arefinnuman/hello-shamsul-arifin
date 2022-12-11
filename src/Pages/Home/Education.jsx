import Lottie from "lottie-react";
import React from "react";
import portfolio from "../../Assets/Animation/portfolio.json";
import aiub from "../../Assets/Images//Aiub.png";

const Education = () => {
  return (
    <section id="about" className="mt-16">
      <h1 className="text-3xl font-bold text-center mt-6">About Me</h1>
      <section className="">
        <div className="container flex justify-center items-center flex-col-reverse mx-auto lg:flex-row">
          <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 ">
            <div className="flex space-x-2 sm:space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="flex-shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>
              <div className="space-y-2">
                <p className="text-lg font-medium ">
                  I love to code because if I can think it, I can make it a
                  reality.
                </p>
                <p className="leading-snug text-sm">
                  In programming I could consistently create a logic that
                  interacts with the other parts of the computer and other
                  applications you can make it happen. All I need to do after I
                  thought about something and actually write it and presto a new
                  thing is created into the world. That really feels like being
                  a wizard.
                </p>
              </div>
            </div>
            <div className="flex space-x-2 sm:space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="flex-shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>
              <div className="space-y-2">
                <p className="text-lg leading-snug">My Caliber</p>
                <p className="leading-snug text-sm">
                  I am familiar with HTML, CSS, React, JavaScript, and several
                  other frameworks. I also enjoy studying UI/UX in my spare
                  time. This has helped me tremendously when designing projects,
                  as I now consider both the final aim and the user experience.
                  I attempt to create effective, conversion-optimized websites
                  with a logical structure
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 xl:w-3/5">
            <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
              <Lottie animationData={portfolio} />
            </div>
          </div>
        </div>
      </section>

      <section>
        <h1 className="text-3xl text-center mt-4 font-bold">
          Educational Summary
        </h1>
        <div className=" sm:p-2 ">
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
