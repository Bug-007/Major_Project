import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Index = () => {
  return (
    <div>
        <Header/>
      <Outlet></Outlet>
    </div>
  );
};

export default Index;
