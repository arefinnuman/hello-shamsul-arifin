import React from "react";
import HeroImage from "../../Assets/Images/HeroImage.jpg";

const HomeHero = () => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Resume.pdf";
        alink.click();
      });
    });
  };

  return (
    <section className="hero md:p-10">
      <div className="hero-content flex-col lg:flex-row">
        <div className="avatar w-1/2">
          <div className="rounded-full ring ring-white ">
            <img src={HeroImage} alt="hero_image" />
          </div>
        </div>
        <div className="w-1/2">
          <h1 className="text-5xl font-bold">SHAMSUL ARIFIN</h1>
          <p className="py-6">
            I am a fresh graduate of Computer Science, with a major in Software
            Engineering. Seeking a position as a Web Developing where I can
            utilize my exceptional expertise and knowledge in designing and
            development. Also seeking a position where I can use my strong
            analytical problem-solving skills to effectively contribute to an IT
            service industry and help the organization grow further. Besides
            that, I have the ability to handle multiple tasks at one time while
            still achieving the goals of the company, excellent communication &
            interpersonal relations, and am committed to maintaining the
            high-quality standards required in this competitive market.
          </p>

          <button
            onClick={onButtonClick}
            className="btn rounded-2xl btn-outline btn-primary btn-sm"
          >
            RESUME
          </button>
          <button className="btn rounded-2xl btn-outline btn-neutral btn-sm ml-3">
            contact
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
