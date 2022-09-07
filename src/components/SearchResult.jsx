import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSearchContext } from "../contexts/SearchContextProvider";
import ReactPlayer from "react-player";
import Loading from "./Loading";
import { NoResult } from ".";
const SearchResult = () => {
  const location = useLocation();
  const {
    searchResult: data,
    getSearchResult,
    isLoading,
    searchTerm,
  } = useSearchContext();
  useEffect(() => {
    if (location?.pathname === "/search")
      getSearchResult(`search/q=${searchTerm}&num=20`);
    else if (location?.pathname === "/news")
      getSearchResult(`news/q=${searchTerm}`);
    else if (location?.pathname === "/images")
      getSearchResult(`image/q=${searchTerm}`);
    else if (location?.pathname === "/videos")
      getSearchResult(`video/q=${searchTerm}&num=20`);
  }, [searchTerm, location?.pathname]);
  if (searchTerm.length === 0) return <NoResult type="searchTerm" />;
  if (isLoading) return <Loading />;
  if (data.length === 0) return <NoResult type={location?.pathname.slice(1)} />;
  switch (location?.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-around items-stretch">
          {data?.map(({ title, link, description, cite }, index) => (
            <div
              key={index + 1}
              className="md:w-2/5 lg:w-2/6
            hover:bg-gray-300
            dark:hover:bg-yellow-800
            cursor-pointer
            w-full p-3"
            >
              <div className=" px-2">
                <span className="text-sm break-words dark:text-white">
                  {cite?.domain?.slice(0, cite?.domain?.indexOf("›"))}
                </span>
                <span className="text-sm text-gray-400"> {cite?.span}</span>
              </div>
              <a href={link} target="_blank" rel="noreferrer">
                <p
                  className="text-black text-lg
                p-1 dark:text-blue-100 
                text-blue-700
                hover:underline
                "
                >
                  {title?.length > 30 ? title?.substr(0, 30) : title}
                </p>
              </a>
              <p
                className="p-1
              break-words
              text-sm
              dark:text-yellow-100
              "
              >
                {description}
              </p>
            </div>
          ))}
        </div>
      );
    case "/videos":
      return (
        <div className="flex flex-wrap justify-around">
          {data?.map(
            ({ link, additional_links }, i) =>
              link?.includes("youtube.com") && (
                <div
                  key={i + 1}
                  className="p-2 m-1 rounded cursor-pointer transition-shadow duration-600 
                hover:shadow-xl bg-gray-400 dark:bg-sky-300"
                >
                  <ReactPlayer url={link} width={350} height={220} controls />
                  {additional_links?.length === 2 && (
                    <span className="p-2 text-gray-600 dark:text-yellow-600 text-xs font-black dark:text-gray-200">
                      {additional_links[1]?.text}
                    </span>
                  )}
                </div>
              )
          )}
        </div>
      );
    case "/images":
      return (
        <div className="flex flex-wrap justify-around">
          {data?.map(({ link, image }, i) => (
            <div key={i + 1} className="p-2 w-80">
              <a
                href={link?.href}
                target="_blank"
                rel="noreferrer"
                className="text-blue-800 dark:text-white text-sm sm:text-base"
              >
                {link?.title}
              </a>
              <img
                src={image?.src}
                alt={image?.alt || "image"}
                height={300}
                width={270}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      );
    case "/news":
      return (
        <div className="flex flex-wrap justify-around items-stretch">
          {data?.map(({ id, link, title, source }) => (
            <div
              key={id}
              className="md:w-2/5 lg:w-2/6
            hover:bg-gray-300
            dark:hover:bg-yellow-800
            cursor-pointer
            w-full p-3"
            >
              <div className="flex">
                <p
                  className="text-sm
                text-red-700
                dark:text-gray-100
                p-2 font-bold"
                >
                  {source?.title}
                </p>
                <a
                  href={source?.href}
                  target="_blank"
                  rel="noreferrer"
                  className="overflow-hidden  text-yellow-400"
                >
                  <p className="break-words text-sm text-gray-600 p-2">
                    {source?.href}
                  </p>
                </a>
              </div>
              <a href={link} target="_blank" rel="noreferrer">
                <p
                  className="p-2
              break-words
              text-lg sm:text-xl text-blue-500"
                >
                  {title}
                </p>
              </a>
            </div>
          ))}
        </div>
      );
    default:
      return "cannot find page";
  }
};

export default SearchResult;
