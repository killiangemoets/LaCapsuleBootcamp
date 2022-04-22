import React from "react";

export default function PauseMenu() {
  return (
    <div className="pause-menu">
      <div>
        <h1 className="pause-title">Are you sure you want to leave?</h1>
      </div>
      <div>
        <button className="btn--yes">Yes</button>
        <button className="btn--no">No</button>
      </div>
    </div>
  );
}
