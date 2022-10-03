/* eslint-disable import/first */
import React, { useState } from "react";
// import styles from "styled-components";
import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isInputValid, setIsInputValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    if (enteredValue.trim().length > 0) {
      setIsInputValid(true);
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length > 0) {
      props.onAddGoal(enteredValue);
      setIsInputValid(true);
      setEnteredValue("");
    } else if (enteredValue.trim().length === 0) {
      setIsInputValid(false);
    }
  };

  // const FormControl = styled.div`
  //   & {
  //     margin: 0.5rem 0;
  //   }

  //   & label {
  //     font-weight: bold;
  //     display: block;
  //     margin-bottom: 0.5rem;
  //   }

  //   & input {
  //     display: block;
  //     width: 100%;
  //     border: 1px solid ${isInputValid ? "#ccc" : "red"};
  //     font: inherit;
  //     line-height: 1.5rem;
  //     padding: 0 0.25rem;
  //   }

  //   &.invalid label {
  //     color: red;
  //   }

  //   &.invalid input {
  //     border-color: red;
  //     background: salmon;
  //   }

  //   &input:focus {
  //     outline: none;
  //     background: #fad0ec;
  //     border-color: #8b005d;
  //   }
  // `;

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <div className={`form-control ${!isInputValid && "invalid"}`}> */}
      <div
        className={`${styles["form-control"]} ${!isInputValid && "invalid"} `}
      >
        <label>Course Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
          value={enteredValue}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
