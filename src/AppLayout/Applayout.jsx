import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const Applayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Applayout;
