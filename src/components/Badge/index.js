import React from "react";
import Hotline from "../../images/hotline.png";

function Badge() {
  return (
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
  );
}

export default Badge;
