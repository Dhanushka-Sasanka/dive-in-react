import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValidInput, setIsValidInput] = useState(true);

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
    if (event.target.value.trim().length > 0) {
      setIsValidInput(true);
    }

  };

  const formSubmitHandler = event => {
    event.preventDefault();

    if (enteredValue.trim().length === 0) {
      setIsValidInput(false);
      return;
    }
    props.onAddGoal(enteredValue);

  };



  return (

    // Dynamicaly Inline Styles

    <form onSubmit={formSubmitHandler}>
      {/* Dynamicaly class  Styles */}
      <div className={`form-control ${!isValidInput ? 'invalid' : ''}`}>

        {/* Dynamicaly Inline Styles */}
        {/* <label style={ {color : !isValidInput ? 'red' : 'black'}}>Course Goal</label> */}
        {/* <input type="text" style={ {borderColor : !isValidInput ? 'red' : 'black'}} onChange={goalInputChangeHandler} /> */}

        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />

        {/* Dynamicaly class  Styles */}
        <span className={!isValidInput ? "error-msg " : "no-error"}>Please enter valid input.!</span>


      </div>
      <Button type="submit">Add Goal</Button>
    </form>



  );
};

export default CourseInput;
