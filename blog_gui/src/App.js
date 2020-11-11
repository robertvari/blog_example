import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import Navbar from "./compotents/Navbar";
import Home from "./compotents/Home";
import BlogDetails from "./compotents/BlogDetails";

function App() {
  return (
    <Router>
        <Navbar/>

        <Switch>
            <Route path="/posts/:slug" component={BlogDetails}/>
            <Route path="/" component={Home}/>
        </Switch>
    </Router>
  );
}

export default App;
