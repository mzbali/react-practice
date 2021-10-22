import { useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim().length !== 0;
  const enteredNameIsNotValid = enteredNameIsTouched && !enteredNameIsValid;

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailIsTouched, setEnteredEmailIsTouched] = useState(false);

  const enteredEmailIsValid = enteredEmail.trim().includes('@');
  const enteredEmailIsNotValid = enteredEmailIsTouched && !enteredEmailIsValid;

  const formIsValid = enteredNameIsValid && enteredEmailIsValid;

  const submitHandler = (event) => {
    event.preventDefault();
    setEnteredNameIsTouched(true);
    setEnteredEmailIsTouched(true);
    if (!formIsValid) {
      return;
    }
    console.log({ name: enteredName, email: enteredEmail });
    setEnteredName('');
    setEnteredEmail('');
    setEnteredNameIsTouched(false);
    setEnteredEmailIsTouched(false);
  };

  const enteredNameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const enteredNameBlurHandler = (event) => {
    setEnteredNameIsTouched(true);
  };

  const enteredEmailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const enteredEmailBlurHandler = (event) => {
    setEnteredEmailIsTouched(true);
  };

  const nameInputtStyle = enteredNameIsNotValid
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
          onChange={enteredNameChangeHandler}
          onBlur={enteredNameBlurHandler}
          value={enteredName}
        />
      </div>
      {enteredNameIsNotValid && <p className="error-text">Name is empty.</p>}
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
