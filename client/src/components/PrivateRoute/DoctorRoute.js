import React from 'react';
import { Redirect, Route } from 'react-router';

const DoctorRoute = ({ children, ...rest }) => {
    const user=JSON.parse(localStorage.getItem("user"))
    

    return (
        <div>
        <Route
  {...rest}
  render={({ location }) =>
    user && user.role==="Doctor" ? (
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
    </div>
    );
};

export default DoctorRoute;