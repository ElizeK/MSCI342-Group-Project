import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import Home from '../Home';
import Landing from '../Landing';
import ThinkPiece from '../ThinkPiece';
import Search from '../Search';
import Profile from '../Profile';
// import SignIn from '.../SignIn';
// import SignUp from '.../SignUp';
// import SignOut from '.../SignOut';
import history from './history';

export default function PrivateRoute({
  //authenticated,
  //...rest
}) {
  return (

    <Router history={history}>
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Landing" exact component={Landing} />
      <Route path="/ThinkPiece" exact component={ThinkPiece} />
      <Route path="/Search" exact component={Search} />
      <Route path="/Profile" exact component={Profile} />
      {/* <Route path="/SignIn" exact component={SignIn} /> */}
      {/* <Route path="/SignUp" exact component={SignUp} /> */}
      {/* <Route path="/SignOut" exact component={SignOut} /> */}
      </Switch>
    </Router>
  );
}