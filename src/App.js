import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './Components/About';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import Homepage from './Components 2/Homepage/Homepage';

function App() {
  return (
  <>
    <Router>
      <div>
        <Switch>
          <Route path='/about' component={About} />
          <Route path='/signup' component={LoginSignup} />
          <Route path='/' component={Homepage} />
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
