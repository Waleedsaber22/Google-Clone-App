import React from "react";
import { NavLink } from "react-router-dom";
const links = [
  { path: "/search", name: "🔍 Search" },
  { path: "/videos", name: "📹 Videos" },
  { path: "/images", name: "📸 Images" },
  { path: "/news", name: "📰 News" },
];
const Linksbar = () => {
  return (
    <div className="flex mt-2 flex-wrap justify-between sm:justify-center items-center">
      {links.map(({ path, name }, i) => (
        <NavLink
          key={i + 1}
          to={path}
          className={({ isActive }) => {
            return `p-2 w-1/4
              text-center
              box-border
              border-b-2
              border-transparent
              hover:border-green-400
              dark:hover:border-yellow-200
              ${
                isActive
                  ? "bg-gray-400 dark:bg-yellow-500 hover:border-white"
                  : ""
              }
              `;
          }}
        >
          {name}
        </NavLink>
      ))}
    </div>
  );
};

export default Linksbar;
