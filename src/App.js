import React from "react";
import "./App.css";
import Header from "./blocks/Header/Header";
import Navbar from "./blocks/Navbar/Navbar";
import Profile from "./blocks/Profile/Profile";
import Messages from "./blocks/Messages/Messages";
import News from "./blocks/News/News";
import Music from "./blocks/Music/Music";
import Settings from "./blocks/Settings/Settings";
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        {/*<Profile name="Ilya Butskikh" dateOfBirth="19.02.2001" city="Yaroslavl'" education="YSTU" contacts="+79159732069" />*/}
        <div className="content">
          <Route path="/profile" component={Profile} />
          <Route path="/messages" component={Messages} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
