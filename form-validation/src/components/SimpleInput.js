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

  const {
    enteredEmail,
    valueIsValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((email) => email.includes('@'));

  const formIsValid = nameIsValid && emailIsValid;

  const submitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    console.log({ name: enteredName, email: enteredEmail });
    nameReset();
    emailReset();
  };

  const nameInputtStyle = nameHasError
    ? 'form-control invalid'
    : 'form-control';

  const emailInputStyle = emailHasError
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
      {nameHasError && <p className="error-text">Please Enter A Valid Name.</p>}
      <div className={emailInputStyle}>
        <label htmlFor="email">E-Mail</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
      </div>
      {emailHasError && (
        <p className="error-text">Please Enter A Valid Email.</p>
      )}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
