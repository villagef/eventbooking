import React from "react";
import { NavLink } from "react-router-dom";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

import "./MainNavigation.css";

const mainNavigation = props => (
  <React.Fragment>
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo">
          <NavLink to="/">Logo</NavLink>
        </div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
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
        </div>
      </nav>
    </header>
  </React.Fragment>
);

export default mainNavigation;
