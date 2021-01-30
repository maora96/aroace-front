import "./App.css";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Character from "./pages/character/character";
import SuggestCharacter from "./pages/suggest-character/suggest-character";
import Success from "./pages/success/success";
import About from "./pages/about/about";
import Dashboard from "./pages/dashboard/dashboard";
import SuggestedCharacters from "./pages/suggested-characters/suggested-characters";
import SuggestedCharacter from "./pages/suggested-character/suggested-character";
import AllCharacters from "./pages/all-characters/all-characters";
import SuggestStory from "./pages/suggest-story/suggest-story";
import UpdateStory from "./pages/update-story/update-story";
import SuggestReview from "./pages/suggest-review/suggest-review";
import SuggestedStories from "./pages/suggested-stories/suggested-stories";
import SuggestedReviews from "./pages/suggested-reviews/suggested-reviews";
import UpdateCharacter from "./pages/update-character/update-character";
import AddCharacter from "./pages/add-character/add-character";
import UpdateReview from "./pages/update-review/update-review";

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
          <Route path="/about" component={About} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/suggested-characters" component={SuggestedCharacters} />
          <Route
            path="/suggested-character/:id"
            component={SuggestedCharacter}
          />
          <Route path="/all-characters" component={AllCharacters} />
          <Route path="/update-character/:id" component={UpdateCharacter} />
          <Route path="/suggest-story/:id" component={SuggestStory} />
          <Route path="/update-story/:id" component={UpdateStory} />
          <Route path="/suggest-review/:id" component={SuggestReview} />
          <Route path="/suggested-stories" component={SuggestedStories} />
          <Route path="/suggested-reviews" component={SuggestedReviews} />
          <Route path="/add-character" component={AddCharacter} />
          <Route path="/update-review/:id" component={UpdateReview} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
