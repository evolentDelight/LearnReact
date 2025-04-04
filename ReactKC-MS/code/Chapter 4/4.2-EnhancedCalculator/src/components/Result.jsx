import "./Result.css"

export default function Result({values, operation}){
  let result = 0;

  if(operation === "Addition") result = Number(values.left) + Number(values.right);
  if(operation === "Subtraction") result = Number(values.left) - Number(values.right);
  if(operation === "Multiplication") result = Number(values.left) * Number(values.right);
  if(operation === "Division") result = Number(values.left) / Number(values.right);

  return(
    <div className="result-container">
      <div>=</div>
      <div className="result">{result}</div>
    </div>
  )
}