import React from "react";
import { NavLink } from "react-router-dom";
import "./SideDrawer.css";

const sideDrawer = props => {
  let drawerClasses = "side-drawer";

  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <NavLink to="/auth">Auth</NavLink>
        </li>
        <li>
          <NavLink to="/events">Events</NavLink>
        </li>
        <li>
          <NavLink to="/bookings">Bookings</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
