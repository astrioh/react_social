import React from "react";
import "./App.css";
import Header from "./blocks/Header/Header";
import Navbar from "./blocks/Navbar/Navbar";
import Profile from "./blocks/Profile/Profile";
import MessagesContainer from "./blocks/Messages/MessagesContainer";
import News from "./blocks/News/News";
import Music from "./blocks/Music/Music";
import Settings from "./blocks/Settings/Settings";
import { Route } from "react-router-dom";
import UsersContainer from "./blocks/Users/UsersContainer";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <div><Navbar /></div>
      <div className="content">
        <Route path="/profile" render={() => <Profile />} />
        <Route path="/messages" render={() => <MessagesContainer />} />
        <Route path="/users" render={() => <UsersContainer />} />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  );
}

export default App;
