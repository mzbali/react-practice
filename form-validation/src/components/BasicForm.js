import useInput from '../hooks/use-input';

const BasicForm = (props) => {
  const {
    value: enteredFirst,
    isValid: firstIsValid,
    isNotValid: firstIsNotValid,
    valueChangeHandler: firstChangeHandler,
    inputBlurHandler: firstBlurHandler,
    reset: firstInputReset,
    valueInputStyle: firstInputStyle,
  } = useInput((first) => first.trim() !== '');

  const {
    value: enteredLast,
    isValid: lastIsValid,
    isNotValid: lastIsNotValid,
    valueChangeHandler: lastChangeHandler,
    inputBlurHandler: lastBlurHandler,
    reset: lastInputReset,
    valueInputStyle: lastInputStyle,
  } = useInput((last) => last.trim() !== '');

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    isNotValid: emailIsNotValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailInputReset,
    valueInputStyle: emailInputStyle,
  } = useInput((email) => email.includes('@'));

  const formIsValid = firstIsValid && lastIsValid && emailIsValid;

  const submitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    console.log({
      first: enteredFirst,
      last: enteredLast,
      email: enteredEmail,
    });
    firstInputReset();
    lastInputReset();
    emailInputReset();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstInputStyle}>
          <label htmlFor="first">First Name</label>
          <input
            type="text"
            id="first"
            onChange={firstChangeHandler}
            onBlur={firstBlurHandler}
            value={enteredFirst}
          />
          {firstIsNotValid && (
            <p className="error-text">Please Enter Valid FirstName.</p>
          )}
        </div>
        <div className={lastInputStyle}>
          <label htmlFor="last">Last Name</label>
          <input
            type="text"
            id="last"
            onChange={lastChangeHandler}
            onBlur={lastBlurHandler}
            value={enteredLast}
          />
          {lastIsNotValid && (
            <p className="error-text">Please Enter Valid Last Name.</p>
          )}
        </div>
      </div>
      <div className={emailInputStyle}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailIsNotValid && (
          <p className="error-text">Please Enter Valid Email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
