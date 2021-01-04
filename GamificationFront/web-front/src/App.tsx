import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import RoadMapPage from "./pages/RoadMapPage";
import React, { Fragment } from "react";
import ClassPage from "./pages/Class";

function App() {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path="/roadmap" component={RoadMapPage} />
          <Route exact path="/class" component={ClassPage} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
