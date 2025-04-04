import { useState } from 'react'
import './App.css'
import Operation from './components/Operation';

function App() {
  const [values, setValues] = useState({left: "", right: ""})

  return (
    <div className='container'>
      <Operation values={values} setValues={setValues}/>
    </div>
  )
}

export default App
