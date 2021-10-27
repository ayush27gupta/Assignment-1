import "./App.css";
import CardClass from "./components/CardClass";
import CardFunction from "./components/CardFunction";

const show_card1 = () => {
  const s1 = document.querySelector(".card_function");
  s1.style.cssText = "display:flex";
};
const show_card2 = () => {
  const s2 = document.querySelector(".card_class");
  s2.style.cssText = "display:flex";
};
const hide_card1 = () => {
  const s1 = document.querySelector(".card_function");
  s1.style.cssText = "display:none";
};
const hide_card2 = () => {
  const s2 = document.querySelector(".card_class");
  s2.style.cssText = "display:none";
};

function App() {
  return (
    <div className="container">
      <div className="heading">
        <h1>Styling using functional and class based components</h1>
      </div>

      <div className="btn">
        <button className="box box1" onClick={show_card1}>
          Click to see styling in functional component
        </button>
        <button className="box box2" onClick={show_card2}>
          Click to see styling in class component
        </button>
      </div>

      <div className="cards">
        <div className="card1" onClick={hide_card1}>
          <CardFunction />
        </div>
        <div className="card2" onClick={hide_card2}>
          <CardClass />
        </div>
      </div>
    </div>
  );
}

export default App;
