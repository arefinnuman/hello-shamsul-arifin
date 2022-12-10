import React from "react";
import background from "../../Assets/Images/Background.png";

const HomeForm = () => {
  return (
    <section
      className="flex justify-center text-center lg:mt-8 py-24 "
      style={{ background: `url(${background})` }}
    >
      <div>
        <h4 className="text-xl font-bold text-primary">Contact Us</h4>
        <h3 className="text-2xl text">Stay Connected with us</h3>
        <form className="py-5">
          <input
            className="lg:w-[450px] h-[48px] rounded-xl pl-4 mt-6 input input-bordered "
            type="email"
            name="email"
            id=""
            placeholder="Email Address"
          />
          <br />
          <input
            className="lg:w-[450px] h-[48px] rounded-xl pl-4 mt-5 input input-bordered "
            type="text"
            name="subject"
            id=""
            placeholder="Subject"
          />
          <br />
          <textarea
            className="lg:w-[450px] h-[140px] rounded-xl pl-4 my-5 input input-bordered  "
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your message"
          ></textarea>
          <br />
          <button className="btn btn-primary btn-sm rounded-2xl">
            {" "}
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default HomeForm;
