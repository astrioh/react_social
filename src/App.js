import React from "react";
import "./App.css";
import Header from "./blocks/Header/Header";
import Navbar from "./blocks/Navbar/Navbar";
import Profile from "./blocks/Profile/Profile";
import Messages from "./blocks/Messages/Messages";
import News from "./blocks/News/News";
import Music from "./blocks/Music/Music";
import Settings from "./blocks/Settings/Settings";
import { BrowserRouter, Route } from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="content">
          <Route path="/profile" render={() => <Profile profilePageData={props.state.profilePageData} dispatch={props.dispatch} id='0' />} />
          <Route path="/messages" render={() => <Messages dispatch={props.dispatch} messagePageData={props.state.messagePageData}/>} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
