import React from "react";

export default function Home() {
  return (
    <div className="home-page">
      <h1>Welcome</h1>
        <p>
          This is a counter app that helps you increase and decrease with any
          value of your choice, reset and set the value of your count.
        </p>
        <p>
          This App was built with a custom hook built with useState, and React
          useReducer hook. They both have the same functionalities.
        </p>
    </div>
  );
}
