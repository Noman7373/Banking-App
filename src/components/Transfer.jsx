import { FaArrowUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Transfer = () => {
  const showTransactionData = useSelector(
    (state) => state.store.bankTransaction
  );

  const filterTransaction = showTransactionData.filter(
    (type) => type.transactionTypes === "Transfer"
  );

  // const totalTransfer = filterTransaction.reduce((acc, transfer) => {
  //   return acc + Number(transfer.amount); // Make sure `amount` is treated as a number
  // }, 0);
  return (
    <>
      {filterTransaction.length > 0 ? (
        <div className="mt-10 flex flex-col justify-center items-center py-8 gap-4">
          <div className="grid md:grid-cols-3 xs:grid-cols-1 sm:grid-cols-2 place-content-center md:gap-10 sm:gap-6 xs:gap-6">
            {filterTransaction &&
              filterTransaction.map((transactionDetails) => {
                const {
                  id,
                  date,
                  amount,
                  currency,
                  transactionTypes,
                  Description,
                } = transactionDetails;
                return (
                  <div
                    key={id}
                    className="flex flex-col gap-2 w-[18rem] p-5 border border-gray-400 rounded-lg"
                  >
                    <p className="text-gray-500 font-bold">
                      Transaction ID: {id}{" "}
                    </p>
                    <p>Date: {date}</p>
                    <div className="flex md:justify-between md:items-center mb-2 mt-2 xs:justify-start xs:items-start xs:gap-2  xs:flex-col md:flex-row">
                      <h1 className="text-yellow-500 text-[1.2rem] flex items-center  gap-2 font-bold">
                        <span>
                          <FaArrowUp className="text-yellow-500" />
                        </span>{" "}
                        {transactionTypes}
                      </h1>
                      <h1 className="text-yellow-500 text-[1.2rem] font-bold">
                        {currency} {amount}
                      </h1>
                    </div>

                    <p>{Description}</p>
                    <p className="text-[1.1rem] font-semibold flex justify-between">
                      Balance{" "}
                      <span className="flex justify-between gap-1">
                        <span>{currency}</span>
                        {amount}.00
                      </span>
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-6 justify-between mt-10">
          <p className="text-[1.1rem]">
            You haven’t made any transactions yet.
          </p>
          <p className="text-[1.1rem]">Time to make your first payment?</p>
          <Link to="/transaction-form">
            <button className="px-4 py-2 bg-blue-500 rounded text-whitehover:bg-transparent border-none outline-none hover:outline-2 hover:outline-blue-500">
              Your payment is just a click away!
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Transfer;
