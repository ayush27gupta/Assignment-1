import React from "react";
import { Component } from "react";

export default class CardClass extends Component {
  render() {
    return (
      <div className="card_class">
        <h3 className="card_head">
          <span>This is created using class Component</span>
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
}
