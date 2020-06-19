import React from 'react';
import HomePage from './Components/HomePage/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Appointment from './Components/Appointment/Appointment';
import Doctor from './Components/Doctor/Doctor';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/'>
            <HomePage></HomePage>
          </Route>
          <Route path='/home'>
            <HomePage></HomePage>
          </Route>
          <Route path='/doctor'>
            <Doctor></Doctor>
          </Route>
          <Route path='/appointment'>
            <Appointment></Appointment>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
