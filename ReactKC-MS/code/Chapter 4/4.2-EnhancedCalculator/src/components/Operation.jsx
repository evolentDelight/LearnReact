import "./Operation.css"

export default function Operation({values, setValues, setOperation}){
  function handleLeftNumberSignConversion(){
    setValues(function(prevValues){
      return(
        {
          left: -prevValues.left,
          right: prevValues.right
        }
      )
    })
  }

  function handleLeftNumber(event){
    let input = event.target.value.trim();//trim() to remove all whitespace
    if(!isNaN(Number(input))){//if Number
      setValues(
        (prevValues) => (
          {
            left: input,
            right: prevValues.right
          }
        )
      )
    }
  }

  function handleRightNumberSignConversion(){
    setValues(
      (prevValues) => ({
        left: prevValues.left,
        right: -prevValues.right
      })
    )
  }

  function handleRightNumber(event){
    let input = event.target.value.trim();//trim() to remove all whitespace
    if(!isNaN(Number(input))){//if Number
      setValues(
        (prevValues) =>(
          {
            left: prevValues.left,
            right: input
          }
        )
      )
    }
  }

  function handleOperation(event){
    setOperation(event.target.value);
  }

  return(
    <div className= "operation-container">
      <div className="input-container">
        <button onClick={handleLeftNumberSignConversion}>+/-</button>
        <input type="text"
          placeholder="Enter Number Here"
          onInput={handleLeftNumber}
          value={values.left}
        />
      </div>

      <select className="operation" onInput={handleOperation}>
        <option value="Addition">+</option>
        <option value="Subtraction">−</option>
        <option value="Multiplication">×</option>
        <option value="Division">÷</option>
      </select>

      <div className="input-container">
        <button onClick={handleRightNumberSignConversion}>+/-</button>
        <input type="text"
          placeholder="Enter Number Here"
          onInput={handleRightNumber}
          value={values.right}
        />
      </div>
    </div>
  )
}