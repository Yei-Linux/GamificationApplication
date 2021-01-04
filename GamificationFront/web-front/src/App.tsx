import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import RoadMapPage from "./pages/RoadMapPage";
import React, { Fragment } from "react";
import ClassPage from "./pages/Class";
import Layout from "./components/Layout";
import CoursePage from "./pages/CoursePage";

function App() {
  return (
    <Router>
      <Fragment>
        <Layout>
          <Switch>
            <Route exact path="/roadmap" component={RoadMapPage} />
            <Route exact path="/class" component={ClassPage} />
            <Route exact path="/courses" component={CoursePage} />
          </Switch>
        </Layout>
      </Fragment>
    </Router>
  );
}

export default App;
