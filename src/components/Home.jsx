import React from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-page">
      <h1>Welcome</h1>
      <p>
        This is a counter app that helps you increase 
        decrease, reset and set the value of your count.
        This App was built with two React custom hooks. 
        One of the custom hooks is built with useState 
        while the other is built with useReducer. 
        They both have the same functionalities. 
      </p>
    </div>
  );
}
