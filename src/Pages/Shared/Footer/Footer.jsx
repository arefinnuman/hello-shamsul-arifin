import React from "react";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import logo from "../../../Assets/Images/logo.png";
const Footer = () => {
  return (
    <footer className="footer items-center p-4">
      <div className="items-center grid-flow-col">
        <div className="w-16">
          <img src={logo} alt="" />
        </div>
        <p>Copyright © 2022 - All right reserved</p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a
          href="https://github.com/arefinnuman"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="w-8 h-8" />
        </a>
        <a
          href="https://twitter.com/arefin_numan"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter className="w-8 h-8" />
        </a>
        <a
          href="https://www.facebook.com/arefinnuman/"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook className="w-8 h-8" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
