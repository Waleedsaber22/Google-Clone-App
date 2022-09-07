import { useContext, createContext, useState } from "react";

const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getSearchResult = async (path) => {
    try {
      setIsLoading(true);
      const baseUrl = "https://google-search3.p.rapidapi.com/api/v1/";
      const res = await fetch(baseUrl + path, {
        method: "GET",
        headers: {
          "X-User-Agent": "desktop",
          "X-Proxy-Location": "EU",
          "X-RapidAPI-Key": process.env.APP_REACT_API_KEY,
          "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
        },
      });
      const data = await res.json();
      if (path.substr(0, 6) === "search" || path.substr(0, 5) === "video")
        setSearchResult(data?.results);
      else if (path?.substr(0, 4) === "news") setSearchResult(data?.entries);
      else if (path?.substr(0, 5) === "image")
        setSearchResult(data?.image_results);
      else setSearchResult([]);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SearchContext.Provider
      value={{
        searchResult,
        searchTerm,
        isLoading,
        getSearchResult,
        setSearchTerm,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
