import React, { useState } from "react";
import { Footer, Navbar, RoutesSearch } from "./components";
const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div className={darkTheme ? "dark" : ""}>
      <div
        className="min-h-screen
      bg-gray-200
      dark:bg-gray-900"
      >
        <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
        <RoutesSearch />
        <Footer />
      </div>
    </div>
  );
};

export default App;
