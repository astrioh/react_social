import React from "react";
import "./App.css";
import Header from "./blocks/Header/Header";
import Navbar from "./blocks/Navbar/Navbar";
import Profile from "./blocks/Profile/Profile";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Profile name="Ilya Butskikh" dateOfBirth="19.02.2001" city="Yaroslavl'" education="YSTU" contacts="+79159732069" />
    </div>
  );
}

export default App;
