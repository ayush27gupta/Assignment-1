import React from "react";
import "././App.css";

export default function Card() {
  return (
    <div className="card">
      <h2 className="card_head">
        <span>This is created using class Component</span>
      </h2>
      <div className="element">
        <div className="external">This is done using external CSS</div>

        <div className="inline" style={{ color: "blue" }}>
          This is done using inline CSS
        </div>
      </div>
    </div>
  );
}
