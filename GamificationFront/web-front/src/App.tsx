import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import RoadMapPage from './pages/RoadMapPage';
import React, { Fragment } from 'react';
import ClassPage from './pages/Class';
import Layout from './components/Layout';
import CoursePage from './pages/CoursePage';
import Welcome from './pages/Welcome';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Exercise from './pages/Exercise';

function App() {
  return (
    <Router>
      <Fragment>
        <Layout>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/exercise" component={Exercise} />
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
