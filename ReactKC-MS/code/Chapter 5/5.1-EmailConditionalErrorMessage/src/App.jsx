import { useState } from "react"
import './App.css'

function App() {
  const [email, setEmail] = useState("")
  const [error, setError] = useState(false)
  
  function handleEmailChange(event){
    setEmail(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault();

    setError(!email.includes("@"))//Check if it contains an '@' sign
  }

  return (
    <>
      <div className="input-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="id-email">Your email: </label>
          <input
            type="text"
            id="id-email"
            value={email}
            onChange={handleEmailChange}
          />
          <button type="submit">Submit</button>
        </form>
        {error && <p className="error-msg">Invalid Email Address Entered!</p>}
      </div>
    </>
  )
}

export default App
