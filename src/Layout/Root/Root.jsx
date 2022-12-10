import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Pages/Shared/Footer/Footer";
import Header from "../../Pages/Shared/Header/Header";

const Root = () => {
  return (
    <div>
      <Header />
      <section className="max-w-[1440px] mx-auto">
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};

export default Root;
