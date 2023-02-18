import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import LeftBar from "./LeftBar";

const Main = () => {
  return (
    <div>
      <Header />
      <LeftBar/>
      <Outlet />
    </div>
  );
};

export default Main;
