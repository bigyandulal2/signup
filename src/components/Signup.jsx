import React from "react";
import { useState } from "react";
import "../css/Signin.css";
export default function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  });
  function handleSubmit() {
    const { email, name, password, confirmPassword } = formData;
    if (!email || !name || !password || !confirmPassword) {
      alert("please fill out the form carefully!");
      return;
    }
    if (!email.includes("@gmail.com")) {
      alert("email field is not appropriate");
      return;
    }
    if (password.length < 6) {
      alert("password length must be greaterr than 6");
      return;
    }
    if (password !== confirmPassword) {
      alert("password must be same for logging , please check the password");
      return;
    }
    alert("successfully signup the form ");
    setFormData({
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
    });
  }
  return (
    <section className="section-signin">
      <form className="signin-form">
        <h1 className="signin-heading">SignUp Form</h1>

        <input
          type="text"
          placeholder="enter your email"
          value={formData.email}
          onChange={(e) =>
            setFormData((prev) => {
              return { ...prev, email: e.target.value };
            })
          }
        />

        <input
          type="text"
          placeholder="enter your name"
          value={formData.name}
          onChange={(e) =>
            setFormData((prev) => {
              return { ...prev, name: e.target.value };
            })
          }
        />

        <input
          type="password"
          placeholder="enter your password"
          value={formData.password}
          onChange={(e) =>
            setFormData((prev) => {
              return { ...prev, password: e.target.value };
            })
          }
        />

        <input
          type="password"
          placeholder="confirm your password"
          value={formData.confirmPassword}
          onChange={(e) =>
            setFormData((prev) => {
              return { ...prev, confirmPassword: e.target.value };
            })
          }
        />

        <p className="signin-btn-container" onClick={handleSubmit}>
          <strong>signup</strong>
        </p>
      </form>
    </section>
  );
}
