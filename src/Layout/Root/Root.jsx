import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Pages/Shared/Footer/Footer";
import Header from "../../Pages/Shared/Header/Header";

const Root = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
    >
      <Header />
      <section className="max-w-[1440px] mx-auto">
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};

export default Root;
