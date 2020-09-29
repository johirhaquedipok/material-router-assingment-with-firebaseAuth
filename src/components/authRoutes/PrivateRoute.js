import { Redirect, Route } from 'react-router-dom';

import React from 'react';

const PrivateRoute = ({
    user, 
    component : Comp, ...rest
}) => {
    return (
          <Route {...rest} component = {(props) => (user ? <Comp {...props} user = {user} /> : <Redirect to = "/signup"  />)} ></Route>
    
    );
};

export default PrivateRoute;