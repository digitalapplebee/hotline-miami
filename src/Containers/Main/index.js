import React from "react";
import BackgroundImage from "../../images/header-large.gif";
import Hotline from "../../images/hotline.png";

import "./index.css";

const backgroundStyle = {
  backgroundImage: `url(${BackgroundImage})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  backgroundPosition: "center center",
};

function Main() {
  return (
    <div className="container" style={backgroundStyle}>
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

export default Main;
