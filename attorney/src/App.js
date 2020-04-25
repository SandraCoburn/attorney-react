import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "./components/Home";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <h1>Law Office</h1>
          <div className="nav-links">
            <Link to="/">Home |</Link>
            <Link to="/personal-injury">Personal Injury |</Link>
            <Link to="/bankruptcy">Bankruptcy |</Link>
            <Link to="/civil-litigation">Civil Litigation </Link>
          </div>
        </nav>
      </header>

      <Route exact path="/">
        <Home />
      </Route>
    </div>
  );
}

export default App;
