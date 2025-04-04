import "./Operation.css"

export default function Operation({values, setValues}){
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

  return(
    <div className= "operation-container">
      <div className="input-container">
        <button onClick={handleLeftNumberSignConversion}>+/-</button>
        <input type="text"
          name="leftNumber"
          id="leftNumber"
          placeholder="Enter Number Here"
          onInput={handleLeftNumber}
          value={values.left}
        />
      </div>

      <div className="operation">+</div>

      <div className="input-container">
        <button onClick={handleRightNumberSignConversion}>+/-</button>
        <input type="text"
          name="RightNumber"
          id="RightNumber"
          placeholder="Enter Number Here"
          onInput={handleRightNumber}
          value={values.right}
        />
      </div>

      <div className="operation">=</div>

      <div className="result">{Number(values.left) + Number(values.right)}</div>

    </div>
  )
}