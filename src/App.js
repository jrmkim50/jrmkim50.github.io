import React, { lazy, Suspense } from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import BackgroundImage from "./components/general/BackgroundImage";
import Navbar from "./components/navbar/Navbar"
import './App.css';
const Home = lazy(() => import("./views/home/Home"));
const Problems = lazy(() => import("./views/problems/Problems"));
const Problem = lazy(() => import("./components/problem/Problem"));

export default function App() {
  return (
    <div className="app">
      <Suspense fallback={<div>Loading</div>}>
        <BackgroundImage/>
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
      </Suspense>
    </div>
  );
}