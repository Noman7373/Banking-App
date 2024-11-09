import React, { useState } from "react";
import { IoMoon } from "react-icons/io5";
import { MdSunny } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mode, setMode] = useState(false);

  function handleMode() {
    setMode((prev) => !prev);
  }

  return (
    <>
      <nav className="flex justify-between items-center px-5 py-4">
        <h1 className="text-[2rem] text-blue-500 font-bold">Banking App</h1>

        <div className="flex justify-between items-center gap-8 text-[1.1rem] font-serif">
          <Link to="/">
            <li className="list-none  hover:text-blue-700">Home</li>
          </Link>
          <Link to="/transaction-form">
            <li className="list-none  hover:text-blue-700">
              Transaction Forms
            </li>
          </Link>
          <Link to="/accountOverview">
            <li className="list-none  hover:text-blue-700">Account Overview</li>
          </Link>
          <Link to="/transaction-history">
            <li className="list-none  hover:text-blue-700">
              Transaction History
            </li>
          </Link>
        </div>
        <div
          className="rounded-[50%] bg-slate-300 flex justify-center items-center p-2 cursor-pointer"
          onClick={handleMode}
        >
          {mode ? (
            <MdSunny size={25} className="text-yellow-200" />
          ) : (
            <IoMoon size={25} className="text-black" />
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
