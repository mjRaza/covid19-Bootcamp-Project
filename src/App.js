import React from "react";
import "./App.css";
import { Home } from "./components/screens/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navbarr } from "../src/components/NavBarr";
import { About } from "../src/components/About";
import { Search } from "./components/Search";

function App() {
  return (
    <BrowserRouter>
      <Navbarr />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
