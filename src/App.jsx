import React from "react";
import { Route, Switch, Redirect, Link, useLocation } from "react-router-dom";
import cls from "classnames";

import "bootstrap/dist/css/bootstrap.min.css";

import appRoutes from "./appRoutes";

function App() {
  const { pathname } = useLocation();

  return (
    <div className="m-4">
      <ul className="nav nav-pills">
        {appRoutes.map((routeProps) => (
          <li
            key={`${routeProps.path}${routeProps.exact ? "-exact" : ""}`}
            className="nav-item"
          >
            <Link
              className={cls(
                "nav-link",
                routeProps.exact && pathname === routeProps.path && "active",
                !routeProps.exact &&
                  pathname.startsWith(routeProps.path) &&
                  "active"
              )}
              to={routeProps.path}
            >
              {routeProps.title}
            </Link>
          </li>
        ))}
      </ul>

      <hr />

      <Switch>
        {appRoutes.map((routeProps) => (
          <Route
            key={`${routeProps.path}${routeProps.exact ? "-exact" : ""}`}
            {...routeProps}
          />
        ))}
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
