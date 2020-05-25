import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Main from "./views/Main";
import "./App.css";
function App() {
  return (
    <Router basename="/">
      <Route path="/" component={Main} />
    </Router>
  );
}

export default App;
