import React from "react";
import { Link } from "react-router-dom";
import ShowTransactions from "./ShowTransactions";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const transferAmount = useSelector((state) => state.store.bankTransaction);

  return (
    <>
      {transferAmount.length > 0 ? (
        <ShowTransactions />
      ) : (
        <div className="flex flex-col items-center gap-6 justify-between mt-7">
          <p className="text-[1.1rem]">
            You haven’t made any transactions yet.
          </p>
          <p className="text-[1.1rem]">Time to make your first payment?</p>
          <Link to="/transaction-form">
            <button className="px-4 py-2 rounded text-white bg-blue-500 hover:bg-transparent hover:border-[1px] border-blue-500">
              Your payment is just a click away!
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Dashboard;
