import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4 mt-6">
        <div className="flex flex-col items-center justify-between gap-5">
          <p className="text-[1.1rem]">
            You haven’t made any transactions yet.
          </p>
          <p className="text-[1.1rem]">Time to make your first payment?</p>
          <Link to="/transaction-form">
            <button className="px-4 py-2 rounded bg-blue-500 hover:bg-transparent hover:border-[1px] border-blue-500">
              Your payment is just a click away!
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
