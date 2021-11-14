import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth.js';

const AdminRoute = ({ children, ...rest }) => {
  const { user, loading, admin } = useAuth();
  
    if(loading){return <div className="py-5 my-5"><Spinner className="p-5" animation="grow" variant="info" /> </div>}
    
  return (
      <Route
      {...rest}
      render={({ location }) =>
      user.email && admin ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: "/home",
            state: { from: location }
          }}
          />
        )
      }
    />
    );
};

export default AdminRoute;