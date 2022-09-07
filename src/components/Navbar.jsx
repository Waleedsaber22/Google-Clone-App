import React from "react";
import Searchbar from "./Searchbar";

const Navbar = ({ setDarkTheme, darkTheme }) => {
  return (
    <div className="border-b border-gray-400 dark:border-gray-900 dark:bg-gray-900 bg-gray-100 dark:text-gray-100">
      <div
        className="
      flex items-center justify-between
      text-xl
      font-bold
       p-1"
      >
        <div className="ml-4">
          <p>googl 🔎</p>
        </div>
        <div className="mr-4  text-right">
          <button
            className="p-3 
          w-full 
          bg-gray-200 
          text-lg
          font-black
          rounded-full
          text-black
          dark:text-white
          dark:bg-gray-600
          "
            style={{ borderRadius: "50%" }}
            onClick={() => setDarkTheme((val) => !val)}
          >
            {darkTheme ? "light ⚪" : "Dark ⚫"}
          </button>
        </div>
      </div>
      <Searchbar />
    </div>
  );
};

export default Navbar;
