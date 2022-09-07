import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SearchResult from "./SearchResult";
const RoutesSearch = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/search" />} />
      <Route path="/search" element={<SearchResult />} />
      <Route path="/news" element={<SearchResult />} />
      <Route path="/videos" element={<SearchResult />} />
      <Route path="/images" element={<SearchResult />} />
      <Route path="/*" element={<SearchResult />} />
    </Routes>
  );
};

export default RoutesSearch;
