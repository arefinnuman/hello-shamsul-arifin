import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { toast } from "react-hot-toast";
import background from "../../Assets/Images/Background.png";

const HomeForm = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gpexpxe",
        "template_4bmtfmg",
        form.current,
        "VETjvuqZOkUJDYj-J"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message Sent Successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section
      className="flex justify-center text-center lg:mt-8 py-24 mt-20"
      style={{ background: `url(${background})` }}
      id="contact"
    >
      <div>
        <h3 className="text-2xl text">Write me a message</h3>
        <form ref={form} onSubmit={sendEmail} className="py-5">
          <input
            className="lg:w-[450px] h-[48px] rounded-xl pl-4 mt-6 input input-bordered "
            type="name"
            name="user_name"
            id=""
            placeholder="Name"
          />
          <br />
          <input
            className="lg:w-[450px] h-[48px] rounded-xl pl-4 mt-5 input input-bordered "
            type="email"
            name="user_email"
            id=""
            placeholder="Email Address"
          />
          <br />
          <input
            className="lg:w-[450px] h-[48px] rounded-xl pl-4 mt-5 input input-bordered "
            type="text"
            name="user_subject"
            id=""
            placeholder="Subject"
          />
          <br />
          <textarea
            className="lg:w-[450px] h-[140px] rounded-xl pl-4 my-5 input input-bordered  "
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Your message"
          ></textarea>
          <br />
          <input
            className="btn btn-outline  btn-primary btn-sm rounded-2xl "
            type="submit"
            value="Send"
          />
        </form>
      </div>
    </section>
  );
};

export default HomeForm;
