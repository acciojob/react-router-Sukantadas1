import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
