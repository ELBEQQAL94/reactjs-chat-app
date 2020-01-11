import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// public pages
import Header from "./components/Header";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Join from "./pages/Join";
import PageNotFound from "./PageNotFound";

const Routers = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/chat" component={Chat} />
        <Route path="/join" component={Join} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
};

export default Routers;
