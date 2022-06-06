import React from "react";
import { Routes, Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import auth from "../../../services/authServices";

const UserProtectedRote = ({ path, component: Component, render, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (!auth.getCurrentUser()){
          return (
            <React.Fragment>
            <Redirect
           
              to={{
                pathname: "/login",
                state: { from: props.location
                 }
              }
            }
            /></React.Fragment>
          )}if (auth.getCurrentUser()['role']!='Admin') {
            return (
            <React.Fragment>

              <Redirect
             
                to={{
                  pathname: "/member/dashboard",
                  state: { from: props.location
                   }
                }
              }
              /></React.Fragment>)
          }
        return Component ? <Component {...props} /> : render(props);
      }}
      exact/>
  );
};

export default UserProtectedRote;
