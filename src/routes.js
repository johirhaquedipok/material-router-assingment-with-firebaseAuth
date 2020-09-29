import { Route, Switch } from "react-router-dom";

import Booking from "./components/home/booking/Booking";
import FinalInfo from "./components/finalInfo/FinalInfo";
import Home from "./components/home/Home";
import Layout from "./layout/Layout";
import NoMatch from "./components/nomatch/NoMatch";
import PrivateRoute from "./components/authRoutes/PrivateRoute";
import React from "react";
import SignIn from "./components/form/SignIn";
import SignUp from "./components/form/SignUp";

function Routes(props) {
  return (
    <Layout>
      <Switch>
        <PrivateRoute {...props} path="Booking" exact>
          <Booking></Booking>
        </PrivateRoute>
        <Route path="/FinalInfo">
          <FinalInfo></FinalInfo>
        </Route>
        <Route path="/Booking">
          <Booking></Booking>
        </Route>
        <Route path="/signup">
          <SignUp></SignUp>
        </Route>
        <Route path="/signin">
          <SignIn></SignIn>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="*">
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Layout>
  );
}

export default Routes;
