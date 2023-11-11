import React from "react";
import Header from "./Header";
import "./App.css";
import HomePage from "./HomePage";
import Dashboard from "./Dashboard";
import Problems from "./Problems";
import Welcome from "./Welcome";
import WelcomeHeader from "./WelcomeHeader";
import Landing from "./Landing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => (
  <div>
    <Routes>
      <Route path="/home" element={<>
          <Landing />
        </>
      } />
      <Route path="/homepage" element={<>
          <Header />
          <HomePage />
        </>
      } />
      <Route path="/welcome" element={
        <>
          <WelcomeHeader />
          <Welcome />
        </>
      } />
      <Route path="/problems" element={
        <>
          <Header />
          <Problems />
        </>
      }/>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </div>
);

export default App;

