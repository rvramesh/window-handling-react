import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import About from "./About/About";
import Links from "./LinkExample/Links";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="about">Home</Link>
            </li>
            <li>
              <Link to="links">Links</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="links">
            <Links />
          </Route>
          <Route path="about">
            <About />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
