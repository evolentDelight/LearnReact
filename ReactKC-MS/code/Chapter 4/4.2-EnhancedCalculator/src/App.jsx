import { useState } from 'react'
import './App.css'
import Operation from './components/Operation';
import Result from './components/Result';

function App() {
  const [values, setValues] = useState({left: "", right: ""})
  const [operation, setOperation] = useState("Addition")

  return (
    <div className='container'>
      <Operation values={values} setValues={setValues} setOperation={setOperation}/>
      <Result values={values} operation={operation}/>
    </div>
  )
}

export default App

// +, −, ×, ÷
// Addition, Subtraction, Multiplication, Division