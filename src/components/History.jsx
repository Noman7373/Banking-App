import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const History = () => {
  const [sortInput, setSortInput] = useState("newest-first");
  const transactionAllHistory = useSelector(
    (state) => state.store.bankTransaction
  );
  const [transferHistory, setTransferHistory] = useState([]);

  useEffect(() => {
    // Sort the transactions whenever the data or sort input changes
    let sortedTransactions;
    if (sortInput === "newest-first") {
      sortedTransactions = [...transactionAllHistory].sort(
        (a, b) => new Date(b.Date) - new Date(a.Date)
      );
    } else if (sortInput === "oldest-first") {
      sortedTransactions = [...transactionAllHistory].sort(
        (a, b) => new Date(a.Date) - new Date(b.Date)
      );
    }
    setTransferHistory(sortedTransactions);
  }, [transactionAllHistory, sortInput]);

  const handleChange = (event) => {
    setSortInput(event.target.value);
  };

  return (
    <>
      <h1 className="text-[2rem] flex justify-center items-center mt-4">
        Transaction History
      </h1>
      <div className="flex justify-around items-center mt-5">
        <h1 className="text-[1.5rem] flex justify-center items-center mt-4">
          All Transactions Table
        </h1>
        <form className="flex gap-2 justify-between items-center sm:flex-col xs:flex-col md:flex-row">
          <label htmlFor="sort-by-date" className="text-lg font-medium">
            Sort By Date:
          </label>
          <select
            id="sort-by-date"
            className="p-2 border dark:text-black text-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={sortInput}
            onChange={handleChange}
          >
            <option value="newest-first">Newest First</option>
            <option value="oldest-first">Oldest First</option>
          </select>
        </form>
      </div>

      <div className="flex flex-col justify-between items-center mt-10">
        <div className="flex justify-between items-center gap-2 w-full px-3 text-white text-[1.1rem] bg-gray-500 p-2">
          <p>Transaction ID.............</p>
          <p>Date</p>
          <p>Type</p>
          <p>Amount</p>
          <p>Description</p>
        </div>
        <div className="w-full flex flex-col gap-3 justify-center items-center  pb-5 pt-3">
          {transferHistory.length > 0 ? (
            <ol className="flex flex-col gap-5 w-full mt-2 text-black list-inside">
              {transferHistory.map((transaction) => (
                <li
                  key={transaction.id}
                  className={`${
                    transaction.transactionTypes == "Withdrawal"
                      ? "bg-red-500 p-2 flex justify-between items-center"
                      : transaction.transactionTypes == "Deposite"
                      ? "p-2 bg-green-500 flex justify-between items-center"
                      : "p-2 bg-gray-300 flex justify-between items-center"
                  } `}
                >
                  <span>{transaction.id}</span>
                  <span>{transaction.date}</span>
                  <span>{transaction.transactionTypes}</span>
                  <span>
                    {transaction.amount}
                    {transaction.currency}
                  </span>

                  <span>{transaction.Description.slice(0, 8)}</span>
                </li>
              ))}
            </ol>
          ) : (
            <p className="text-white">No transactions found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default History;
