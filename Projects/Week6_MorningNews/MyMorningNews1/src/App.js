import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScreenHome from "./ScreenHome";
import ScreenSource from "./ScreenSource";
import ScreenArticlesBySource from "./ScreenArticlesBySource";
import ScreenMyArticles from "./ScreenMyArticles";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ScreenHome} />
        <Route path="/sources/:source" component={ScreenArticlesBySource} />
        <Route path="/sources" component={ScreenSource} />
        <Route path="/myarticles" component={ScreenMyArticles} />
      </Switch>
    </Router>
  );
  // return <ScreenHome />;
  // return <ScreenSource />;
  // return <ScreenArticlesBySource />;
  // return <ScreenMyArticles />;
}

export default App;
