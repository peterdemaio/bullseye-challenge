import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/nav/nav-bar";
import Gallery from "./views/gallery";
import Home from "./views/home";
import ProtectedRoute from "./components/auth/protected-route";
import "./app.css";

const App = () => {
  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <div className="container flex-grow-1">
        <div className="mt-5">
          <Switch>
            <Route path="/" exact component={Home} />
            <ProtectedRoute path="/gallery" component={Gallery} />
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default App;
