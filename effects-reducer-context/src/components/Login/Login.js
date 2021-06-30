import React, { useState, useReducer, useEffect } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

//all the state check logic outside of component and can use a lot of logic
const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.value, isValid: action.value.includes('@') };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') };
  }
  return { value: '', isValid: null };
};

const passwordReducer = (state, action) => {
  if (action.type === 'PASSWORD_INPUT') {
    return { value: action.value, isValid: action.value.trim().length > 6 };
  }
  if (action.type === 'PASSWORD_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: '', isValid: null };
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();

  // const [emailState, setEmailState] = useState({ value: '', isValid: null }); //v2

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
  });

  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null,
  });
  const [formIsValid, setFormIsValid] = useState(false);

  // useEffect(() => {
  //   console.log('Effect Running');

  //   return () => {
  //     console.log('Cleanup Running');
  //   };
  // }, [enteredPassword]);

  // useEffect(() => {
  //   const identifier = setTimeout(() => {
  //     setFormIsValid(
  //       enteredEmail.includes('@') && enteredPassword.trim().length > 6
  //     );
  //   }, 500);
  //   return () => {
  //     clearTimeout(identifier); //(some trigger changing state or prop this effects dependency)=>>>> previous component unmount, this runs, next state mount, effect runs.
  //   };
  // }, [enteredEmail, enteredPassword]);

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('effect Running');
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);
    return () => {
      console.log('clear Running');
      clearTimeout(identifier); //(some trigger changing state or prop this effects dependency)=>>>> previous component unmount, this runs, next state mount, effect runs.
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value); //on every change render after two iteration

    // setEmailState((prevEmailState) => { //v2
    //   //useState object
    //   return {
    //     ...prevEmailState,
    //     value: event.target.value, // save character on change
    //   };
    // });

    dispatchEmail({ type: 'USER_INPUT', value: event.target.value });

    // setFormIsValid(event.target.value.includes('@') && passwordState.isValid); //maybe the code ran too early
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);

    dispatchPassword({ type: 'PASSWORD_INPUT', value: event.target.value }); //could be 6

    // setFormIsValid(emailState.value.includes('@') && event.target.isValid); //maybe the code ran too early //dispatch(state) is scheduled, so still 5
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(enteredEmail.includes('@')); //enteredEmail could be an older snapshot when, unblurred trriggerd.

    // setEmailState((prevEmailState) => { //v2
    //   //useState object
    //   return {
    //     ...prevEmailState,
    //     isValid: prevEmailState.value.includes('@'), //check and save validity on unblur
    //   };
    // });

    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'PASSWORD_BLUR' });
    // setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
