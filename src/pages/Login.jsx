import React, { useState } from "react";
import "../css/register.css";
import Btn from "../components/Btn";
import { BaseUrl } from "../components";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const isNullOrEmpty = (value) =>
    value === null || value === undefined || value === "";

  const handleSubmit = async (event) => {
    event.preventDefault();
    const body = {
      email: email,
      password: password,
    };
    for (const key in body) {
      if (body.hasOwnProperty(key) && isNullOrEmpty(body[key])) {
        setMessage(`${key.replaceAll("_", " ")} cannot be blank or empty`);
        return null;
      }
    }
    setMessage("");
    const url = `${BaseUrl()}/auth-login/`;
    const request = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ApiAuthorization: process.env.REACT_APP_API_KEY,
      },
      body: JSON.stringify(body),
    });
    if (request.ok) {
      const response = await request.json();
      setMessage(response.message);
      window.localStorage.setItem("access_token", response.access);
      window.localStorage.setItem("refresh_token", response.refresh);
      window.localStorage.setItem("user_email", response.username);

      window.localStorage.setItem("authenticated", true);
    } else {
      const response = await request.json();
      setMessage(response.message);
    }
  };

  return (
    <div className="register">
      <div className="register-form">
        <div className="heading">
          <h2>Welcome Back!</h2>
          <div className="line"></div>
        </div>
        <div className="message-banner">
          {message ? <p>{message}</p> : <></>}
        </div>
        <div className="input-form">
          <div class="input-container">
            <i class="fa fa-envelope icon"></i>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
            />
          </div>
          <div class="input-container">
            <i class="fa fa-key icon"></i>
            <input
              type={showPassword ? `text` : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <i
              class={
                showPassword ? "fa fa-eye-slash r-icon" : "fa fa-eye r-icon"
              }
              onClick={() =>
                showPassword ? setShowPassword(false) : setShowPassword(true)
              }
            ></i>
          </div>
        </div>
        <div className="join-r-btn" onClick={handleSubmit}>
          <Btn content={"Login"} />
        </div>
      </div>
    </div>
  );
};

export default Login;
