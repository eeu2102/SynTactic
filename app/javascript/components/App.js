import React from "react";
import Header from "./Header";
import "./App.css";
import HomePage from "./HomePage";
// import Profile from "./Profile";
import Problems from "./Problems";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => (
  <div>
    <Header />
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/problems" element={<Problems />} />
      {/* <Route path="/profile" element={<Profile />} /> */}
    </Routes>
  </div>
);

export default App;
