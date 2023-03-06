import { useState } from "react";

export default function Counter(props) {
  let [counter, setCounter] = useState(props.counter);

  function decrementHandler() {
    setCounter((counter) => counter - 1);
  }

  function clearHandler() {
    setCounter((counter = 0));
  }

  function incrementHandler(e) {
    // console.log("clicked", e);
    setCounter((counter) => counter + 1);
  }

  let title = ``;
  if (counter === 1) {
    title = "First Blood";
  } else if (counter === 2) {
    title = "Double Kill";
  } else if (counter === 3) {
    title = "Triple Kill";
  } else if (counter === 4) {
    title = "Multi Kill";
  } else if (counter === 5) {
    title = "Unstoppable";
  } else {
    title = "Counter";
  }

  return (
    <div>
      <h3 style={{ fontSize: counter + "em" }}>
        {counter >= 6 ? "Godlike" : title}: {counter}
      </h3>

      <button onClick={decrementHandler}>-</button>
      <button onClick={clearHandler}>0</button>

      {counter >= 8 ? null : <button onClick={incrementHandler}>+</button>}
    </div>
  );
}
