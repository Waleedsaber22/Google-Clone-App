import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import "./index.css";
import "./components/NoResult.css";
import { BrowserRouter as Router } from "react-router-dom";
import { SearchContextProvider } from "./contexts/SearchContextProvider";
const DomElement = document.getElementById("root");
const ReactRootElement = ReactDom.createRoot(DomElement);
ReactRootElement.render(
  <Router>
    <SearchContextProvider>
      <App />
    </SearchContextProvider>
  </Router>
);
