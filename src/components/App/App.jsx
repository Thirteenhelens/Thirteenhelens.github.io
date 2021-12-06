import "./App.css";
import * as React from "react";
import Header from "../Header/Header";
import Profile from "../Profile/Profile";
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";

function App() {
  return (
    <div>
      <Header/>

      {/* <img src="../wow_crazy.jpg" alt="Practically a concrete wall" style={{width:1440}} /> */}

      <Profile />

      <Portfolio />

      <Contact />
    </div>
  );
}

export default App;
