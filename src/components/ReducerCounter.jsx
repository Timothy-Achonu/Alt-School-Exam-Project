import React from 'react'
import useReducerCounter from './CustomHooks/useReducerCounter';


export default function ReducerCounter() {
    const {count, dispatch, ACTIONS, inputHandler} = useReducerCounter(33);
  return (
    <div className='counter'>
      <h1>UseReducer Counter</h1>
      <div >
        <input type="text" placeholder='set counter value' 
        onChange={inputHandler} onBlur={(e) => {e.target.value = ""}}/>
        <h2 className='count-num'>Count : {count}</h2>
        <div className='buttons-wrapper'>
        <button onClick={() => {
          dispatch({type : ACTIONS.INCREASE})
        }}>INCREMENT</button>
        <button onClick={() => {
          dispatch({type : ACTIONS.DECREASE})
        }}>DECREMENT</button>
        <button onClick={() => {
          dispatch({type : ACTIONS.RESET})
        }}>RESET</button>
        </div>
      </div>
    </div>
  )
}
