import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  const transferAmounts = useSelector((state) => state.store.bankTransaction);

  return (
    <>
      {transferAmounts.length > 0 ? (
        <div className="flex justify-around items-center mt-8">
          <div className="flex justify-between items-center gap-6">
            <NavLink to="/">
              <button className="p-2 rounded text-white hover:text-blue-500 bg-blue-500 hover:bg-transparent border-none outline-none hover:outline-2 hover:outline-blue-500">
                Deposit
              </button>
            </NavLink>
            <NavLink to="/withdraw-history">
              <button className="p-2 rounded bg-green-500 hover:text-green-500 text-white hover:bg-transparent border-none outline-none hover:outline-2 hover:outline-green-500 ">
                Withdraw
              </button>
            </NavLink>
            <NavLink to="/transfer-history">
              <button className="p-2 rounded bg-yellow-500 text-white hover:text-yellow-500 hover:bg-transparent border-none outline-none hover:outline-2 hover:outline-yellow-500">
                Transfer
              </button>
            </NavLink>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Dashboard;
