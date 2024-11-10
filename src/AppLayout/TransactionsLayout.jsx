import React from "react";
import Dashboard from "../components/Dashboard";
import { Outlet } from "react-router";

const TransactionsLayout = () => {
  return (
    <>
      <Dashboard />
      <Outlet />
    </>
  );
};

export default TransactionsLayout;
