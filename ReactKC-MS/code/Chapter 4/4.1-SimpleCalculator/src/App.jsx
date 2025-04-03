import "./App.css"
import Addition from "./components/Addition.jsx"
import Subtraction from "./components/Subtraction.jsx"
import Multiplication from "./components/Multiplication.jsx"
import Division from "./components/Division.jsx"

function App() {
  return (
    <div className="container">
      <Addition/>
      <Subtraction/>
      <Multiplication/>
      <Division/>
    </div>
  )
}

export default App
