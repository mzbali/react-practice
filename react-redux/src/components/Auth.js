import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth';
import classes from './Auth.module.css';

const Auth = () => {
  const dispatch = useDispatch();

  const emailRef = useRef();
  const passRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      emailRef.current.value.trim() === '' &&
      passRef.current.value.trim().length < 5
    ) {
      return;
    }
    dispatch(authActions.login());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" ref={emailRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" ref={passRef} />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
