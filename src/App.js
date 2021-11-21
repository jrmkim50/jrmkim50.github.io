import React, { lazy, Suspense } from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import BackgroundImage from "./components/general/BackgroundImage";
import Navbar from "./components/navbar/Navbar"
import './App.css';
import problemIDs from "./consts/problemIDtoProblem";
import securityIDs from "./consts/securityIDs";
const Home = lazy(() => import("./views/home/Home"));
const Problems = lazy(() => import("./views/problems/Problems"));
const Post = lazy(() => import("./components/post/Post"));
const Security = lazy(() => import("./views/security/Security"));
const NotFound = lazy(() => import("./views/NotFound"));

export default function App() {
  return (
    <div className="app">
      <Suspense fallback={<div>Loading</div>}>
        <BackgroundImage/>
        <Navbar/>
        <Switch>
          <Route path="/problems/:id">
            <Post ids = {problemIDs}/>
          </Route>
          <Route path="/problems">
            <Problems />
          </Route>
          <Route path="/security/:id">
            <Post ids = {securityIDs}/>
          </Route>
          <Route path="/security">
            <Security />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route component={NotFound}/>
        </Switch>
      </Suspense>
    </div>
  );
}