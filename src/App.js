import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./views/home/Home";
import Problems from "./views/problems/Problems";
import Problem from "./components/problem/Problem";
import './App.css'

export default function App() {
  return (
    <Router>
      <div className="app">
        <Navbar/>
        <Switch>
          <Route path="/problems/:problemID">
            <Problem />
          </Route>
          <Route path="/problems">
            <Problems />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}