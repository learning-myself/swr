import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./About";
import List from "./List";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;

App.propTypes = {};
