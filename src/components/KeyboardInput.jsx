import { useState, useRef } from "react";
import Result from "./Result";
export default function KeyboardInput() {
  const [inputPara, setInputPara] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(60 * 1000);
  const timer = useRef();
  const data = useRef();
  function handleKeyboard() {
    timer.current = setInterval(function () {
      setTimeRemaining((prevTime) => prevTime - 1000);
    }, 1000);
  }

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    console.log("entered here");
    data.current.blur();
  }

  // window.addEventListener(
  //   "keydown",
  //   function () {
  //     data.current.focus();
  //   },
  //   { once: true }
  // );
  function handleInput() {
    setInputPara()
  }
  return (
    <>
      {!timeRemaining && <Result ref={data} />}
      <textarea
        className="typing-area"
        ref={data}
        onFocus={handleKeyboard}
        type="text"
      />
    </>
  );
}
