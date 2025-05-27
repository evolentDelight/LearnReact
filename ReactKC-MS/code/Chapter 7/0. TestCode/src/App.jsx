import { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(""); //used for consoleOutputButton
  const counterRef = useRef(0); //used for counterRef
  const [triggerRender, setTriggerRender] = useState(0); //used for counterRef

  const consoleOutputButton = () => {
    console.log("current.value: ", inputRef.current.value);
    console.log("current: ", inputRef.current);
  };

  const handleCounter = () => {
    counterRef.current += 1; //Displays only after a render, but still counts each button click
    setTriggerRender((prevState) => prevState + 1);
  };

  return (
    <>
      <p>For Console Output</p>
      <input type="text" ref={inputRef} />
      <button onClick={consoleOutputButton}>Console Output</button>
      <hr />
      <p>For counterRef</p>
      <p>counterRef: {counterRef.current}</p>
      <p>triggerRender: {triggerRender}</p>
      <button onClick={handleCounter}>+1</button>
    </>
  );
}

export default App;
