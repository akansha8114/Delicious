// src/components/Logo.js
//Adding a component which will add a title icon.
import React from "react";
import { LOGO_URL } from "../utils/contents";

const Logo = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img 
        src= {LOGO_URL}   // Update with your actual logo path
        alt="Delicious Logo" 
        style={{ width: "40px", height: "40px", marginRight: "10px" }} 
      />
      <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>DELICIOUS</h1>
    </div>
  );
};

export default Logo;
