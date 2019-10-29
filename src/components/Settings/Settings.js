import React from "react";
import "./Settings.css";

function Settings() {
  return (
    <div className="settings">
      <p>
        <i className="fa fa-cog settings"></i> Converter Settings
      </p>

      <div className="settings--section">
        <div className="left--side">
          <div className="col">
            <h6 className="label">Tidy Up</h6>
            <h6 className="label second">Remove the new lines from output?</h6>
          </div>
          <div className="toggle--button">
            <button>YES</button>
            <button>NO</button>
          </div>
        </div>
        <div className="right--side">RIGHT SIDE</div>
      </div>
    </div>
  );
}

export default Settings;
