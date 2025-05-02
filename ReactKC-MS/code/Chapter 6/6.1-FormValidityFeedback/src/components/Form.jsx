import classes from "./Form.module.css";

export default function Form({ handleInput, isValidEmail, isValidPassword }) {
  let emailInputClass = classes.general;
  let passwordInputClass = classes.general;
  return (
    <form className={classes.form}>
      <label htmlFor="emailInput">Your Email:</label>
      <input
        className={`${classes.input}, ${emailInputClass}`}
        type="email"
        id="emailInput"
      />
      <label htmlFor="passwordInput">Your Password:</label>
      <input
        className={`${classes.input}, ${passwordInputClass}`}
        type="password"
        id="passwordInput"
      />
      <input className={classes.submitButton} type="button" value="Submit" />
    </form>
  );
}
