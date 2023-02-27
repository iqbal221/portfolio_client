import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Sidebar from "../Shared/Sidebar/Sidebar";

const Main = () => {
  return (
    <div className="lg:px-24 md:px-10 px-3">
      <Sidebar></Sidebar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
