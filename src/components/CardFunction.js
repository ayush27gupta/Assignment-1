import React from "react";

export default function CardFunction() {
  return (
    <div className="card_function">
      <h3 className="card_head">
        <span>This is created using functional Component</span>
      </h3>
      <div className="element">
        <div className="external">This is done using external CSS</div>

        <div className="inline" style={{ color: "grey" }}>
          This is done using inline CSS
        </div>
      </div>
    </div>
  );
}
