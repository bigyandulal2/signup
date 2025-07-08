import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import Signup from "./components/Signup";
import "./css/App.css";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<SignIn />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<Signup />} />
      </Route>
    </Routes>
  );
}
