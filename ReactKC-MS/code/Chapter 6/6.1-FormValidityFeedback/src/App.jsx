import { useState } from "react";
import "./App.css";
import Form from "./components/Form";

function validateEmail(email) {
  return /^\S+@\S+.\S/.test(email);
}

function validatePassword(password) {
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
}

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

  const handleUserInputChange = (inputType) => (event) => {
    setUserInput((prevState) => ({
      ...prevState,
      [inputType]: event.target.value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const { email, password } = userInput;

    setValidations({
      isEmailValid: validateEmail(email),
      isPasswordValid: validatePassword(password),
    });
  };

  return (
    <>
      <Form
        userInputs={userInput}
        validations={validations}
        handleEmailInput={handleUserInputChange("email")}
        handlePasswordInput={handleUserInputChange("password")}
        handleFormSubmit={handleFormSubmit}
      />
    </>
  );
}

export default App;
