import React from "react";
import {
  Route,
  Switch,
  Redirect,
  Link,
  useRouteMatch,
  useLocation,
} from "react-router-dom";
import cls from "classnames";

import exampleRoutes from "./exampleRoutes";

function ExamplePage() {
  const { url, path } = useRouteMatch();
  const { pathname } = useLocation();

  return (
    <div>
      <ul className="nav nav-pills">
        {exampleRoutes.map((routeProps) => (
          <li
            key={`${routeProps.path}${routeProps.exact ? "-exact" : ""}`}
            className="nav-item"
          >
            <Link
              className={cls(
                "nav-link",
                routeProps.exact &&
                  pathname === `${path}/${routeProps.path}` &&
                  "active",
                !routeProps.exact &&
                  pathname.startsWith(`${path}/${routeProps.path}`) &&
                  "active"
              )}
              to={`${url}/${routeProps.path}`}
            >
              {routeProps.title}
            </Link>
          </li>
        ))}
      </ul>

      <hr />

      <Switch>
        <Route path={path} exact>
          <p>Please select one example above.</p>
        </Route>
        {exampleRoutes.map((routeProps) => (
          <Route
            key={`${routeProps.path}${routeProps.exact ? "-exact" : ""}`}
            path={`${path}/${routeProps.path}`}
            exact={routeProps.exact}
            component={routeProps.component}
          />
        ))}
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default ExamplePage;
