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
        <div className="md:w-1/2">
          <h1 className="font-bold text-neutral py-2">Front-End Developer</h1>
          <h1 className="text-5xl font-bold ">SHAMSUL ARIFIN</h1>
          <p className="py-6">
            I am a fresh graduate of Computer Science, with a major in Software
            Engineering. Seeking a position as a Web Developing where I can
            utilize my exceptional expertise and knowledge in designing and
            development.I am an enthusiastic web developer that is quick to pick
            things up and who works well in a team. I also have a strong desire
            to advance professionally and always improve my abilities.
          </p>

          <button
            onClick={onButtonClick}
            className="btn rounded-2xl btn-outline btn-primary btn-sm"
          >
            DOWNLOAD RESUME
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
