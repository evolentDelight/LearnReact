import { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef("");

  const consoleOutputButton = () => {
    console.log("current.value: ", inputRef.current.value);
    console.log("current: ", inputRef.current);
  };

  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={consoleOutputButton}>Console Output</button>
    </>
  );
}

export default App;
