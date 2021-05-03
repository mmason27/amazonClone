//need to refactor this code to put it in index.js

import "./App.css";
import React, { useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from './components/Login';
import Payment from './components/Payment';
import Orders from './components/Orders';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51ImJqFHVWHaSjTzLnjeG8cCd2bLW2DeqQ4ReFXjpLfyABIdjlxTV4emkiNlfPvRqh0oc4HlWR8O50ktceFOg7iMe00YqyYTf6J');
//this is a public key so you can use it like this

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when the app component loads
    //think of this as an observer/listener
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>>', authUser);

      if(authUser) {
        //the user just logged in/the user was logged in
        //even if you refresh the page firebase will log you back in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    //lowercase app for BEM convention
    <Router>
      <div className="app">
        <Switch>
        <Route path="/orders">
          <Header/>
          <Orders/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/checkout">
            <Header />
            <Checkout/>
          </Route>
          <Route path="/payment">
            <Header/>
            {/* here we're using a higher order component */}
            <Elements stripe={promise}>
              <Payment/>
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
