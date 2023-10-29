import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import "./App.css";
import HomePage from "./HomePage";
import Profile from "./Profile";
import Problems from "./Problems";
import Results from "./Results";

const App = () => (
  <div>
    <Header />
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/problems" element={<Problems />} />
      {/* <Route path="/profile" element={<Profile />} /> */}
      {/* <Route path="/results" element={<Results />} /> */}
    </Routes>
  </div>
);

export default App;
