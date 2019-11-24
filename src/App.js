import React from "react";
import Hotline from "./images/hotline.png";
import "./index.css";

function App() {
  return (
    <div className="container">
      <div className="text">
        <p>
          Now, for you two
          <br />
          ...
        </p>
        <p>
          You're supposed to be killing people!
          <br />
          Make it look like you really hit them.
        </p>
        <p>
          ...
          <br />
          Press any key...
        </p>
      </div>
      <div className="badge-container">
        <div className="badge">
          <span>
            HOTLINE
            <br />
            MIAMI
          </span>
          <div className="image-container">
            <img src={Hotline} alt="Hotline Miami" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
