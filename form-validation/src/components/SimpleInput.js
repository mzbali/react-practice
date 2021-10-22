import { useState } from 'react';
import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  const {
    enteredName,
    valueIsValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput((name) => name.trim() !== '');

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailIsTouched, setEnteredEmailIsTouched] = useState(false);

  const enteredEmailIsValid = enteredEmail.trim().includes('@');
  const enteredEmailIsNotValid = enteredEmailIsTouched && !enteredEmailIsValid;

  const formIsValid = nameIsValid && enteredEmailIsValid;

  const submitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    console.log({ name: enteredName, email: enteredEmail });
    nameReset();
    setEnteredEmail('');
    setEnteredEmailIsTouched(false);
  };

  const enteredEmailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const enteredEmailBlurHandler = (event) => {
    setEnteredEmailIsTouched(true);
  };

  const nameInputtStyle = nameHasError
    ? 'form-control invalid'
    : 'form-control';

  const emailInputStyle = enteredEmailIsNotValid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputtStyle}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
      </div>
      {nameHasError && <p className="error-text">Name is empty.</p>}
      <div className={emailInputStyle}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          onChange={enteredEmailChangeHandler}
          onBlur={enteredEmailBlurHandler}
          value={enteredEmail}
        />
      </div>
      {enteredEmailIsNotValid && <p className="error-text">Email is empty.</p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
