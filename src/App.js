import React from "react";
import "./App.css";
import Header from "./blocks/Header";
import Navbar from "./blocks/Navbar";
import Profile from "./blocks/Profile";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;
