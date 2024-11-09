import React from "react";

const AccountOverview = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-2 mt-4">
        <h1 className="text-[2rem]">Transaction Form</h1>
        <h1>Make a Transaction</h1>
        <div className="flex justify-between items-center gap-6 mt-4">
          <button className="p-2 rounded bg-blue-500 hover:bg-transparent hover:border-[1px] border-blue-500 ">
            Deposit
          </button>
          <button className="p-2 rounded bg-green-500 hover:bg-transparent hover:border-[1px] border-blue-500 ">
            Withdraw
          </button>
          <button className="p-2 rounded bg-yellow-500 hover:bg-transparent hover:border-[1px] border-blue-500 ">
            Transfer
          </button>
        </div>
      </div>
    </>
  );
};

export default AccountOverview;
