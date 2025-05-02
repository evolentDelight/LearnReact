import { useState } from "react";
import "./App.css";
import Form from "./components/Form";

//Form Submission and Validation of user's Email and Password Input
function App() {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });

  const [validations, setValidations] = useState({
    isEmailValid: true,
    isPasswordValid: true,
  });

  const handleUserInputChange = (inputType) => () => {
    setUserInput((prevState) => ({
      ...prevState,
      [inputType]: prevState[inputType],
    }));
  };

  return (
    <>
      <Form
        userInputs={userInput}
        handleEmailInput={handleUserInputChange("email")}
        handlePasswordInput={handleUserInputChange("password")}
      />
    </>
  );
}

export default App;
