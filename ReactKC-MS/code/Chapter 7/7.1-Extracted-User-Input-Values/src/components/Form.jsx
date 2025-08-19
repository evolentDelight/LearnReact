import { useRef } from "react";

const PROGRAMS = {
  basics: "The Basics",
  advanced: "Advanced Concepts",
  mastery: "Mastery",
};

function Form() {
  const nameRef = useRef();
  const programRef = useRef();

  function formSubmitHandler(event) {
    event.preventDefault();
    console.log(`User Name: ${nameRef.current.value}`);
    console.log(`Selected Program: ${PROGRAMS[programRef.current.value]}`);
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your name</label>
        <input ref={nameRef} type="text" id="name" />
      </div>
      <div className="form-control">
        <label htmlFor="program">Choose your program</label>
        <select id="program" ref={programRef}>
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
