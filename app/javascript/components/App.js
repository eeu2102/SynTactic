import React from "react";
import Header from "./Header";
import "./App.css";
import HomePage from "./HomePage";
import Dashboard from "./Dashboard";
import Problems from "./Problems";
import Welcome from "./Welcome";
import WelcomeHeader from "./WelcomeHeader";
import LandingHeader from "./LandingHeader";
import Landing from "./Landing";
import ProblemsHeader from "./ProblemsHeader";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
<style>
  @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,400;0,500;0,600;1,500;1,600&display=swap');
</style>

const App = () => (
  <div>
    <Routes>
      <Route path="/login" element={<>
          <LandingHeader />
          <Landing />
        </>
      } />
      <Route path="/home" element={<>
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
          <ProblemsHeader />
          <Problems />
        </>
      }/>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </div>
);

export default App;

