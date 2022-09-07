import React, { useState } from "react";
import Linksbar from "./Linksbar";
import { useSearchContext } from "../contexts/SearchContextProvider";
let searchID;
const Searchbar = () => {
  const [text, setText] = useState("");
  const { setSearchTerm } = useSearchContext();
  const handleSearchChange = (e) => {
    setText(e.target.value);
    clearTimeout(searchID);
    searchID = setTimeout(() => {
      setSearchTerm(e.target.value);
    }, 300);
  };
  return (
    <div
      className="m-auto sm:w-3/6
      sm:-mt-14 text-center"
    >
      <div className="relative">
        <input
          value={text}
          placeholder="Search Google or type a URL"
          className="sm:w-full
              rounded-full
              w-1/2
              md:w-3/4
              bg-blue-200
              my-1
              dark:text-white
              p-2
              border-2
              border-gray-400
              dark:bg-gray-600
              outline-none
              focus:border-green-600
              dark:focus:border-yellow-400
              "
          onChange={handleSearchChange}
        />
        {text?.length !== 0 && (
          <button onClick={() => setText("")} className="absolute mt-3.5 -ml-6">
            X
          </button>
        )}
      </div>
      <Linksbar />
    </div>
  );
};
export default Searchbar;
