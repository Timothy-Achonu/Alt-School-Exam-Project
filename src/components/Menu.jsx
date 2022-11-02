import React from 'react'
import { NavLink} from "react-router-dom";


export default function Menu({showMenu, setShowMenu}) {
  return (
    <div className={`menu ${showMenu ? "show": ""}`}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/counter">Counter</NavLink>
      <NavLink to="/testErrorBoundary">Test Error boundary</NavLink>
    </div>
  )
}
