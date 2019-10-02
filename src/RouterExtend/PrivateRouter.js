import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getAuth } from '../utils';

const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log(getAuth());
  return (
    <Route
      {...rest}
      render={props =>
        getAuth() !== null ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
