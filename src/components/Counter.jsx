import { useState } from "react";

export default function Counter(props) {
  const [counter, setCounter] = useState(0);

  function decrement() {
    setCounter(counter - 1);
  }

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <div className="counter">
      <div className="counter-header">
        <h2 className="counter-title">{props.title}</h2>
      </div>
      <div className="counter-body">
        <button className="counter-btn decrement" onClick={decrement}>
          -
        </button>
        <span className="counter-number">{counter}</span>
        <button className="counter-btn increment" onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
}
