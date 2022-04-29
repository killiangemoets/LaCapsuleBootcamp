import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScreenHome from "./ScreenHome";
import ScreenSource from "./ScreenSource";
import ScreenArticlesBySource from "./ScreenArticlesBySource";
import ScreenMyArticles from "./ScreenMyArticles";

import myArticles from "./reducers/article";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

const store = createStore(combineReducers({ myArticles }));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={ScreenHome} />
          <Route path="/sources/:source" component={ScreenArticlesBySource} />
          <Route path="/sources" component={ScreenSource} />
          <Route path="/myarticles" component={ScreenMyArticles} />
        </Switch>
      </Router>
    </Provider>
  );
  // return <ScreenHome />;
  // return <ScreenSource />;
  // return <ScreenArticlesBySource />;
  // return <ScreenMyArticles />;
}

export default App;
