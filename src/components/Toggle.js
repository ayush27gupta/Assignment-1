import { useState } from "react";
import CardClass from "./CardClass";
import CardFunction from "./CardFunction";

function Toggle() {
  const [toggleClassCard, setClassToggleCard] = useState(false);
  const [toggleFunctionCard, setFunctionToggleCard] = useState(false);

  return (
    <div className="container">
      <div className="heading">
        <h1>Styling using functional and class based components</h1>
      </div>

      <div className="btn">
        <button
          className="box box1"
          onClick={() => setFunctionToggleCard(!toggleFunctionCard)}
        >
          Click to see styling in functional component
        </button>
        <button
          className="box box2"
          onClick={() => setClassToggleCard(!toggleClassCard)}
        >
          Click to see styling in class component
        </button>
      </div>

      <div className="cards">
        <div
          className="card1"
          onClick={() => setFunctionToggleCard(!toggleFunctionCard)}
        >
          {toggleFunctionCard && <CardFunction />}
        </div>
        <div
          className="card2"
          onClick={() => setClassToggleCard(!toggleClassCard)}
        >
          {toggleClassCard && <CardClass />}
        </div>
      </div>
    </div>
  );
}

export default Toggle;
