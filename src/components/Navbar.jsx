import React, { useEffect, useState } from "react";
import { IoMoon } from "react-icons/io5";
import { MdSunny } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const savedMode = localStorage.getItem("darkMode") === "true";
  const [mode, setMode] = useState(savedMode);

  useEffect(() => {
    if (mode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [mode]);

  function toogleMode() {
    setMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("darkMode", newMode.toString());
      return newMode;
    });
  }

  return (
    <>
      <nav className="flex justify-between items-center px-5 py-4">
        <h1 className="text-[2rem] text-blue-500 font-bold">Banking App</h1>

        <div className="md:flex justify-between items-center gap-8 text-[1.1rem] sm:hidden xs:hidden">
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
          onClick={toogleMode}
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
