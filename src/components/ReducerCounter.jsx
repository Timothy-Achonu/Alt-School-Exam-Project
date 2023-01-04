import { useReducer, useEffect } from "react";

function ReducerCounter() {
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: "0" });
  }, []);

  const ACTIONS = {
    INCREASE: "increase",
    DECREASE: "decrease",
    RESET: "reset",
    SET_COUNT_VALUE: "setValue",
    SET_VALUE: "setValueToChangeCountWith",
  };
  function setValue(value, state, type) {
    let num = Number(value);
    if (String(num) === "NaN" || value === "") {
      return state;
    }
    return type === ACTIONS.SET_VALUE
      ? { ...state, valueToChangeCountWith: num }
      : { ...state, count: num };
  }
  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.SET_COUNT_VALUE:
        return setValue(action.payload, state, action.type);
      case ACTIONS.SET_VALUE:
        return setValue(action.payload, state, action.type);
      case ACTIONS.INCREASE:
        return { ...state, count: state.count + state.valueToChangeCountWith };
      case ACTIONS.DECREASE:
        return { ...state, count: state.count - state.valueToChangeCountWith };
      case ACTIONS.RESET:
        return { count: 0, valueToChangeCountWith: 1 };
      default:
        return state;
    }
  }
  function countHandler(e) {
    dispatch({
      type: ACTIONS.SET_COUNT_VALUE,
      payload: e.target.value,
      elem: e.target,
    });
  }
  function valueHandler(e) {
    dispatch({
      type: ACTIONS.SET_VALUE,
      payload: e.target.value,
      elem: e.target,
    });
  }
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    valueToChangeCountWith: 1,
  });

  return (
    <div className="counter">
      <h1>UseReducer Counter</h1>
      <div>
        <div className="input-wrapper">
          <div>
            <label for="count-value">Set Count Value</label>
            <input
              type="number"
              name="count-value"
              placeholder="set counter value"
              onChange={countHandler}
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
              name="number-to-change-count-with"
              placeholder="default: 1"
              onChange={valueHandler}
             
            />
          </div>
        </div>

        <h2 className="count-num">Count : {state.count}</h2>
        <div className="buttons-wrapper">
          <button
            onClick={() => {
              dispatch({ type: ACTIONS.INCREASE });
            }}
          >
            INCREASE
          </button>
          <button
            onClick={() => {
              dispatch({ type: ACTIONS.DECREASE });
            }}
          >
            DECREASE
          </button>
          <button
            onClick={() => {
              dispatch({ type: ACTIONS.RESET });
            }}
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  );
}
export default ReducerCounter;
//set number to increase or decrease by

/*

Setup a custom counter hook with increment, decrement, reset, 
setValue functions with a valid UI and Implement a combination 
of states with a useReducer that implements a counter with the 
four evident features in the custom hook -  increment, 
decrement, reset, setValue. Implement a page for the 
custom hook, useReducer, 404, and a page to test error 
boundary and good SEO.

*/
