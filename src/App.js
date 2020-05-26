import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import InfoModal from "./components/InfoModal";
import Main from "./views/Main";
import "./App.css";
function App() {
  return (
    <Router basename="/">
      <Switch>
        <Route path="/info" exact component={InfoModal} />
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  );
}

export default App;
