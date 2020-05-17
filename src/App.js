import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/Contact" component={Contact} />
      </Switch>
    </>
  );
}

export default App;
