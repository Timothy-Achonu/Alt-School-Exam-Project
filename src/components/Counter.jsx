import React from "react";
import useCounter from "./CustomHooks/useCounter";
import { NavLink } from "react-router-dom";

function Counter() {
  const { count, valueToChangeCountWith, increase, decrease, reset, setCountValue, setValue } =
    useCounter(0);
  return (
    <div className="counter">
      <h1>Custom Hook Counter</h1>
      <div>
        <div className="input-wrapper">
          <div>
            <label for="count-value">Set Count Value</label>
            <input
              type="number"
              name="count-value"
              placeholder="set counter value"
              onChange={setCountValue}
              onBlur={(e) => {
                e.target.value = "";
              }}
            />
          </div>
          <div>
            <label for="number-to-change-count-with">
              Set number to increase or decrease by
            </label>
            <input
              type="number"
              placeholder="defualt: 1"
              name="number-to-change-count-with"
              onChange={setValue}
            />
          </div>
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
