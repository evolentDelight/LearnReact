import { useRef } from "react";

const PROGRAMS = {
  basics: "The Basics",
  advanced: "Advanced Concepts",
  mastery: "Mastery",
};

function Form() {
  const userName = useRef();
  const userProgram = useRef();

  function formSubmitHandler(event) {
    event.preventDefault();
    console.log(`User Name: ${userName.current.value}`);
    console.log(`Selected Program: ${PROGRAMS[userProgram.current.value]}`);
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your name</label>
        <input ref={userName} type="text" id="name" />
      </div>
      <div className="form-control">
        <label htmlFor="program">Choose your program</label>
        <select id="program" ref={userProgram}>
          <option value="basics">The Basics</option>
          <option value="advanced">Advanced Concepts</option>
          <option value="mastery">Mastery</option>
        </select>
      </div>
      <button>Submit</button>
    </form>
  );
}

export default Form;
