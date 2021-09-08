import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { rotas } from "./router";

export default function RouterExample() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            {rotas.map((route) => {
              return (
                <li>
                  <Link to={route.path}>{route.title}</Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {rotas.map((route) => {
            const Component = route.component;
            return (
              <Route key={route.path} path={route.path}>
                <Component />
              </Route>
            );
          })}
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
