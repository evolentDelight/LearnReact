import classes from "./Form.module.css";

export default function Form() {
  return (
    <form>
      <label htmlFor="emailInput">Your Email:</label>
      <input type="email" id="emailInput" />
      <label htmlFor="passwordInput">Your Password</label>
      <input type="password" id="passwordInput" />
    </form>
  );
}
