import React from "react";
import "./App.css";
import Tabs from "./components/tabs.jsx";
import Gallery from "./components/gallery.jsx";
import VideoCallImage from "./components/Video call-bro.png"; // import image

const App = () => {
  return (
    <div className="app-container">
      <div className="left-half">

        <img src={VideoCallImage} alt="Video Call Illustration" />

      </div>

      <div className="right-half">
        
        <Tabs />
        <Gallery />
      </div>
    </div>
  );
};

export default App;
