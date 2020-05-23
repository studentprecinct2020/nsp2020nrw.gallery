import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./views/Main";
import "./App.css";
function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

export default App;
