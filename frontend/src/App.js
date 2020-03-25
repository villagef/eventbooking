import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import AuthPage from "./pages/Auth";
import BookingsPage from ".//pages/Bookings";
import EventsPage from "./pages/Events";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect from="/" to="/auth" exact />
        <Route path="/auth" component={AuthPage} />
        <Route path="/events" component={EventsPage} />
        <Route path="/booking" component={BookingsPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;