import React, { useState } from "react";
import { BsCalendarDate } from "react-icons/bs";
import { FaPenFancy } from "react-icons/fa";
import { MdCurrencyExchange } from "react-icons/md";
import { TfiText, TfiWorld } from "react-icons/tfi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { submitTransaction } from "../store/storeSlice";

const TransactionForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    transactionTypes: "Deposite",
    amount: "",
    currency: "USD",
    date: "",
    Description: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formValues, "formValues");
    dispatch(submitTransaction(formValues));
  };

  return (
    <>
      <div className="flex justify-center items-center mt-1">
        <h1 className="text-[2rem]">Transaction Form</h1>
      </div>
      <div className="flex items-center justify-center mt-4">
        <form
          className="flex flex-col gap-4 w-[35rem] mt-3"
          onSubmit={(e) => onSubmit(e)}
        >
          <div className="grid grid-cols-2 gap-3 p-1">
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2" htmlFor="type">
                {" "}
                <span>
                  <TfiText size={15} />
                </span>{" "}
                Type
              </label>
              <select
                value={formValues.transactionTypes}
                onChange={handleOnChange}
                name="transactionTypes"
                id="transactionTypes"
                className="outline-none border border-gray-400 rounded px-2 py-[0.8rem] cursor-pointer hover:border-blue-500 dark:text-black text-white"
              >
                <option value="Deposite">Deposite</option>
                <option value="Withdrawal">Withdrawal</option>
                <option value="Transfer">Transfer</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2" htmlFor="amount">
                {" "}
                <span>
                  <MdCurrencyExchange size={15} />
                </span>{" "}
                # Amount
              </label>
              <input
                type="number"
                placeholder="Enter Amount"
                id="amount"
                name="amount"
                required
                value={formValues.amount}
                onChange={handleOnChange}
                className="outline-none border border-gray-400 rounded p-2 text-[1.1rem] dark:text-black text-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 p-1">
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2" htmlFor="currency">
                {" "}
                <span>
                  <TfiWorld size={15} />
                </span>{" "}
                Currency
              </label>
              <select
                name="currency"
                id="currency"
                className="outline-none border border-gray-400 rounded px-2 py-[0.8rem] cursor-pointer hover:border-blue-500 dark:text-black text-white"
                value={formValues.currency}
                onChange={handleOnChange}
              >
                <option value="USD">USD</option>
                <option value="BHD">BHD</option>
                <option value="EUR">EUR</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2" htmlFor="date">
                {" "}
                <span>
                  <BsCalendarDate size={15} />
                </span>{" "}
                Date
              </label>
              <input
                type="date" // Correct input type for date
                id="date"
                name="date"
                required
                value={formValues.date}
                onChange={handleOnChange}
                className="outline-none border border-gray-400 rounded p-2 text-[1.1rem] dark:text-black text-white"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className="flex items-center gap-2" htmlFor="description">
              {" "}
              <span>
                <FaPenFancy size={15} />
              </span>{" "}
              Description
            </label>

            <textarea
              required
              name="Description"
              id="Description"
              value={formValues.Description}
              onChange={handleOnChange}
              className="outline-none border border-gray-400 rounded p-2 text-[1.1rem] dark:text-black text-white"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="p-3 w-[10rem] rounded bg-blue-500  hover:bg-transparent hover:border-[1px] border-blue-500 "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default TransactionForm;
