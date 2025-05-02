import classes from "./Form.module.css";

export default function Form({
  userInputs,
  validations,
  handleEmailInput,
  handlePasswordInput,
  handleFormSubmit,
}) {
  let emailInputClass = validations.isEmailValid
    ? classes.inputValid
    : classes.inputInvalid;
  let passwordInputClass = validations.isPasswordValid
    ? classes.inputValid
    : classes.inputInvalid;

  return (
    <form className={classes.form} onSubmit={handleFormSubmit}>
      <label htmlFor="emailInput">Your Email:</label>
      <input
        className={`${classes.input} ${emailInputClass}`}
        type="text"
        name="email"
        value={userInputs.email}
        onChange={handleEmailInput}
      />
      <label htmlFor="passwordInput">Your Password:</label>
      <input
        className={`${classes.input} ${passwordInputClass}`}
        type="password"
        name="password"
        value={userInputs.password}
        onChange={handlePasswordInput}
      />
      <input className={classes.submitButton} type="submit" value="Submit" />
    </form>
  );
}
