import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import Home from '../Home';
import PrivateRoute from '../Navigation/PrivateRoute.js';



const App = () => {
  return (
    <Router>
      <div>
        <PrivateRoute exact path="/" component={Home} />
      </div>
    </Router>
  );
}


export default App;