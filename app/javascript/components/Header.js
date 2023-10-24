import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <Link to="/home/">
      <h1>SynTactic</h1>
    </Link>    
  </header>
);

export default Header;
