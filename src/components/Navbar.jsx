import React, { useEffect, useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { IoMoon } from "react-icons/io5";
import { MdSunny } from "react-icons/md";
import { TfiClose } from "react-icons/tfi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const savedMode = localStorage.getItem("darkMode") === "true";
  const [mode, setMode] = useState(savedMode);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (mode) {
      document.body.classList.add("dark");
      document.getElementById("navBar").classList.add("dark");
    } else {
      document.body.classList.remove("dark");
      document.getElementById("navBar").classList.remove("dark");
    }
  }, [mode]);

  function toogleMode() {
    setMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("darkMode", newMode.toString());
      return newMode;
    });
  }

  const handleMenuBar = () => {
    setMenu((prev) => !prev);
  };

  return (
    <>
      <nav className="flex justify-between items-center px-5 py-4">
        <h1 className="text-[2rem] text-blue-500 font-bold">Banking App</h1>

        <div className="md:flex justify-between items-center gap-8 text-[1.1rem] sm:hidden xs:hidden">
          <NavLink to="/">
            <li className="list-none  hover:text-blue-700">Home</li>
          </NavLink>
          <NavLink to="/transaction-form">
            <li className="list-none  hover:text-blue-700">
              Transaction Forms
            </li>
          </NavLink>
          <NavLink to="/accountOverview">
            <li className="list-none  hover:text-blue-700">Account Overview</li>
          </NavLink>
          <NavLink to="/transaction-history">
            <li className="list-none  hover:text-blue-700">
              Transaction History
            </li>
          </NavLink>
        </div>
        <div className="flex justify-between items-center gap-2">
          <div
            className="rounded-[50%] bg-slate-300 flex justify-center items-center p-2 cursor-pointer"
            onClick={toogleMode}
          >
            {mode ? (
              <MdSunny size={25} className="text-yellow-900" />
            ) : (
              <IoMoon size={25} className="text-black" />
            )}
          </div>
          <span
            className="p-1 md:hidden xs:flex sm:flex cursor-pointer"
            onClick={handleMenuBar}
          >
            {menu ? <TfiClose size={30} /> : <CgMenuGridO size={30} />}
          </span>
        </div>
      </nav>

      {/* Menu for Small Devices */}
      <hr />
      <nav
        id="navBar"
        className={`${
          menu
            ? "md:hidden xs:flex flex-col absolute left-0 bg-[#5d6e7f] dark:text-white gap-4 py-3 px-3 h-[calc(100vh-82px)] w-[18rem] transition-all duration-500 ease-in-out rounded"
            : "md:hidden xs:flex flex-col absolute left-[-100%] dark:text-white gap-4 py-3 z-10 px-3 h-[calc(100vh-82px)] w-[18rem] transition-all duration-500 ease-in-out "
        }`}
      >
        <NavLink to="/" onClick={handleMenuBar}>
          <li className="list-none cursor-pointer px-3 py-2 rounded-xl border border-black mt-4 hover:bg-blue-500">
            Home
          </li>
        </NavLink>
        <NavLink to="/transaction-form" onClick={handleMenuBar}>
          <li className="list-none cursor-pointer px-3 py-2 rounded-xl border border-black mt-4 hover:bg-blue-500">
            Transaction Forms
          </li>
        </NavLink>
        <NavLink to="/accountOverview" onClick={handleMenuBar}>
          <li className="list-none cursor-pointer px-3 py-2 rounded-xl border border-black mt-4 hover:bg-blue-500">
            Account Overview
          </li>
        </NavLink>
        <NavLink to="/transaction-history" onClick={handleMenuBar}>
          <li className="list-none cursor-pointer px-3 py-2 rounded-xl border border-black mt-4 hover:bg-blue-500">
            Transaction History
          </li>
        </NavLink>
      </nav>
    </>
  );
};

export default Navbar;
