import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth.js';

const PrivateRoute = ({ children, ...rest }) => {
  const { user, loading } = useAuth();
  
    if(loading){return <div className="py-5 my-5"><Spinner className="p-5" animation="grow" variant="info" /> </div>}
    
  return (
    <Route
      {...rest}
      render={({ location }) =>
       user?.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;