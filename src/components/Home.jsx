import React from "react";
import { Outlet } from "react-router-dom";
import Dashboard from "./Dashboard";
import "../css/Home.css";
export default function Home() {
  return (
    <div className="home">
      <Dashboard />
      <section className="home-content">
        <Outlet />
      </section>
    </div>
  );
}
