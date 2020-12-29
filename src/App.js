import "./App.css";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Results from "./pages/results/results";
import SuggestCharacter from "./pages/suggest-character/suggest-character";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/results" component={Results} />
          <Route path="/suggest-character" component={SuggestCharacter} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
