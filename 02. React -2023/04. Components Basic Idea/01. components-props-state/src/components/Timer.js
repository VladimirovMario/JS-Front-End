import { useState } from "react";

export default function Timer(props) {
  let [seconds, setSeconds] = useState(props.start);

  setTimeout(() => {
    setSeconds((seconds) => seconds + 1);
  }, 1000);

  return (
    <div>
      <h3>Timer</h3>
      <p>Time: {seconds}s</p>
    </div>
  );
}
