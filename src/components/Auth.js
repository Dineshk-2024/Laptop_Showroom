import React from "react";

import "./Auth.css";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";

const Auth = () => {
  const dispatch = useDispatch();
  const handleSubmit =(e)=>{
    e.preventDefault();
     //dispatch
     dispatch(authActions.login());
  };
  return (
    <div className="container">
      <h1>Login</h1>{" "}
      <form onSubmit={handleSubmit}>
        <label htmlFor="Email" >Email</label>
        <input type="email" name="id" id="id" required  placeholder="Email"/>
        <label htmlFor="password" aria-required>Password</label>
        <input type="password" name="password" id="password" placeholder="Password" required/>
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
