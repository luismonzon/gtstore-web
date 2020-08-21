import React from 'react';
import './App.css';
import { Route, Router, Switch } from 'react-router-dom';
import Signup from './auth/components/Signup';
import history from './config/history';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/signup" render={props => <Signup {...props}></Signup>}></Route>
      </Switch>
    </Router>
  );
}

export default App;
