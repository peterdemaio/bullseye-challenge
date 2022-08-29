import React from "react";
import { Route, Switch } from "react-router-dom";

import { NavBar } from "./components";
import { Home, Profile, Gallery } from "./views";
import ProtectedRoute from "./components/protected-route";
import "./app.css";

const App = () => {
  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <div className="container flex-grow-1">
        <div className="mt-5">
          <Switch>
            <Route path="/" exact component={Home} />
            <ProtectedRoute path="/profile" component={Profile} />
            <ProtectedRoute path="/gallery" component={Gallery} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default App;
