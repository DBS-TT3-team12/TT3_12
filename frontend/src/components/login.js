import React, { useState } from "react";
import { loginUser } from "../context/actions";
import { useAuthState, useAuthDispatch } from "../context/context";
import { useNavigate } from "react-router-dom";

import "./login.css";

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAuthDispatch();
  const { loading, errorMessage } = useAuthState(); //read the values of loading and errorMessage from context

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      let response = await loginUser(dispatch, { user, password });
      if (!response) return;
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className={{ width: 200 }}>
        <h1>Login Page</h1>
        {errorMessage ? <p className="error">{errorMessage}</p> : null}
        <form>
          <div className="loginForm">
            <div className="loginFormItem">
              <label htmlFor="user">Username</label>
              <input
                type="text"
                id="user"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                disabled={loading}
              />
            </div>
            <div className="loginFormItem">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
              />
            </div>
          </div>
          <button onClick={handleLogin} disabled={loading}>
            login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
