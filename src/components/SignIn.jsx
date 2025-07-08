import React, { useState } from "react";
import "../css/Signin.css";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function SignIn() {
  const signin = useRef(null);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit() {
    if (!email || !password) {
      alert("please fill out the field first ");
      return;
    }
    if (!email.includes("@gmail.com")) {
      alert("email format is incorrect");
      return;
    }
    if (!password || password.length < 6) {
      alert("password must be greater than 6 length");
      return;
    }
    alert("form successfully submitted");

    setEmail("");
    setPassword("");
  }
  useEffect(() => {
    signin.current.style.border = "1px solid black";
  }, []);
  return (
    <section className="section-signin">
      <form className="signin-form">
        <h1 className="signin-heading">SignIn Form</h1>

        <input
          id="email"
          name="email"
          type="text"
          placeholder="enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          id="password"
          type="password"
          placeholder="enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <p className="signin-btn-container" onClick={(e) => handleSubmit()}>
          <strong>signin</strong>
        </p>
        <p
          className="signup-btn-container "
          ref={signin}
          onClick={() => navigate("/signup")}
        >
          <strong>signup</strong>
        </p>
      </form>
    </section>
  );
}
