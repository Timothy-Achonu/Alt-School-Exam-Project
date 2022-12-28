import React from "react";
import useCounter from "./CustomHooks/useCounter";
import { NavLink } from "react-router-dom";

function Counter() {
  const { count, increase, decrease, reset, setCountValue, setValue } = useCounter(0);
  return (
    <div className="counter">
      <h1>Custom Hook Counter</h1>
      <div>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="set counter value"
            onChange={setCountValue}
            onBlur={(e) => {
              e.target.value = "";
            }}
          />
          <input
            type="text"
            placeholder="specify value to change count with"
            onChange={setValue}
            onBlur={(e) => {
              e.target.value = "";
            }}
          />
        </div>

        <h2 className="count-num">Count : {count}</h2>
        <div className="buttons-wrapper">
          <button onClick={increase}>INCREASE</button>
          <button onClick={decrease}>DECREASE</button>
          <button onClick={reset}>RESET</button>
        </div>
      </div>
      <div>
        <NavLink to="/reducerCounter">Go to Reducer Counter</NavLink>
      </div>
    </div>
  );
}
export default Counter;
