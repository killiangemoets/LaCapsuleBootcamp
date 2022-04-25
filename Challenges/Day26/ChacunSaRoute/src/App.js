import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Account from "./Account";

function App() {
  return (
    <Router>
      <div
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/account" component={Account} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
