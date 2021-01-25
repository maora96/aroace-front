import "./App.css";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Character from "./pages/character/character";
import SuggestCharacter from "./pages/suggest-character/suggest-character";
import Success from "./pages/success/success";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/character/:id" component={Character} />
          <Route path="/suggest-character" component={SuggestCharacter} />
          <Route path="/success" component={Success} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
