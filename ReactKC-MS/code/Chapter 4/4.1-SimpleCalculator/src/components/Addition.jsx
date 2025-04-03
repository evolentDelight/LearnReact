import { useState } from "react"
import "./Operation.css"

export default function Addition(){
  const [leftNumber, setLeftNumber] = useState("");
  const [rightNumber, setRightNumber] = useState("");

  function handleLeftNumberSignConversion(){
    setLeftNumber(prevLeftNumber => -prevLeftNumber);
  }

  function handleLeftNumber(event){
    let input = event.target.value.trim();//trim() to remove all whitespace
    if(!isNaN(Number(input))){//if Number
      setLeftNumber(input)
    }
  }

  function handleRightNumberSignConversion(){
    setRightNumber(prevRightNumber => -prevRightNumber);
  }

  function handleRightNumber(event){
    let input = event.target.value.trim();//trim() to remove all whitespace
    if(!isNaN(Number(input))){//if Number
      setRightNumber(input)
    }
  }

  return(
    <div className= "operation-container">
      <button onClick={handleLeftNumberSignConversion}>+/-</button>
      <input type="text"
        name="leftNumber"
        id="leftNumber"
        placeholder="Enter Number Here"
        onInput={handleLeftNumber}
        value={leftNumber}
      />

      <div className="operation">+</div>

      <button onClick={handleRightNumberSignConversion}>+/-</button>
      <input type="text"
        name="RightNumber"
        id="RightNumber"
        placeholder="Enter Number Here"
        onInput={handleRightNumber}
        value={rightNumber}
      />

      <div className="operation">=</div>

      <div className="result">{Number(leftNumber) + Number(rightNumber)}</div>

    </div>
  )
}

//Use RegExp or regex for exponential
