import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div>
        <NavLink to="/">Smurfs</NavLink>
      </div>
      <div>
        <NavLink to="smurf-form">Add Smurf</NavLink>
      </div>
    </nav>
  );
}
