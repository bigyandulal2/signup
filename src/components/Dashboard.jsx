import React, { useState } from "react";
import "../css/Dashboard.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
export default function Dashboard() {
  const signinref = useRef(null);
  const signupref = useRef(null);
  const [isSign, setIsSign] = useState(false);
  function handleSignin() {
    setIsSign(true);
    signupref.current.style.background = "whitesmoke";
    signinref.current.style.background = "pink";
    signinref.current.style.color = "grey";
    signupref.current.style.color = "black";
    navigate("/signin");
  }
  function handleSignup() {
    setIsSign(false);
    signinref.current.style.background = "orange";
    signupref.current.style.background = "pink";
    signupref.current.style.color = "grey";
    signinref.current.style.color = "black";
    navigate("/signup");
  }
  const navigate = useNavigate();
  return (
    <section className="dashboard">
      <div
        className={`signin-btn-container ${isSign && "deep"}`}
        onClick={() => handleSignin()}
        ref={signinref}
      >
        <strong>signin</strong>
      </div>
      <div
        className={`signup-btn-container ${!isSign && "deep"}`}
        onClick={() => handleSignup()}
        ref={signupref}
      >
        <strong>signup</strong>
      </div>
    </section>
  );
}
