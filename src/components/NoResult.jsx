import React, { useEffect } from "react";

const NoResult = ({ type }) => {
  useEffect(() => {
    const mainElement = document.getElementsByClassName("main-body-circle")[0];
    setInterval(() => {
      mainElement.style.animation = "spin--fan 1s linear infinite normal both";
    }, 10000);
    setInterval(() => {
      mainElement.style.animation = "none";
    }, 12015);
  }, []);
  return (
    <div
      className="flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-700"
      style={{ height: "557px" }}
    >
      <div
        className="flex justify-center
    items-center
    main-body-circle
    bg-gray-300 mb-36"
      >
        <div className="circle-main-1 dark:bg-yellow-500"></div>
        <div className="circle-main-2 dark:bg-yellow-500"></div>
        <div className="circle-main-3 dark:bg-yellow-500"></div>
        <div className="circle-1 bg-gray-100 dark:bg-gray-700"></div>
        <div className="circle-2"></div>
        <div className="circle-3 flex justify-center font-black items-center">
          G
        </div>
        <div className="circle-4 bg-gray-100 dark:bg-gray-700"></div>
        <div className="circle-5"></div>
        <div className="circle-6 flex justify-center font-black items-center">
          O
        </div>
        <div className="circle-branch-1 flex justify-center font-black items-center">
          L
        </div>
        <div className="circle-branch-2 flex justify-center font-black items-center">
          G
        </div>
        <div className="circle-center flex justify-center font-black items-center">
          O
        </div>
      </div>
      <div className="font-black dark:text-gray-200">
        {type === "searchTerm"
          ? "Type any thing to search for"
          : `Cannot Find Any 
          ${type?.toUpperCase()}`}
      </div>
    </div>
  );
};

export default NoResult;
