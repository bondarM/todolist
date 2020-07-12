import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Info from "./pages/Info";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <div className="container-fluid bg__theme__dark pt-4">
          <Route path="/" exact component={Home} />
          <Route path="/info" exact component={Info} />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
