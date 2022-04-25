import React from "react";

export default function PauseMenu() {
  return (
    <div className="background-menu">
      <div className="pause-menu">
        <div>
          <h1 className="pause-title">Are you sure you want to leave?</h1>
        </div>
        <div className="pause-buttons">
          <button className="btn--pause">Yes</button>
          <button className="btn--pause">No</button>
        </div>
      </div>
    </div>
  );
}
