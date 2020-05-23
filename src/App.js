import React from "react";
import { HashRouter as Router } from "react-router-dom";
import Main from "./views/Main";
import "./App.css";
function App() {
  return (
    <Router basename="/">
      <Main />
    </Router>
  );
}

export default App;
