import { useRef, useState } from 'react';
import useHttp from '../../hooks/use-http';
import { signRequest } from '../../lib/api';
import FBLoading from '../UI/FBLoading';
import classes from './AuthForm.module.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const {
    sendRequest: sendSignRequest,
    status: signStatus,
    error: signError,
    data: signData,
    errorReset,
  } = useHttp(signRequest);

  const switchAuthModeHandler = () => {
    errorReset();
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const reqData = {
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
      login: null,
    };
    if (isLogin) {
      reqData.login = true;
      await sendSignRequest(reqData);
      console.log(signData);
    } else {
      reqData.login = false;
      await sendSignRequest(reqData);
      if (signData) {
        console.log(signData.idToken);
      }
    }
  };

  if (signError) {
    alert(signError);
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {signStatus === 'pending' ? (
            <FBLoading />
          ) : (
            <button>{isLogin ? 'Login' : 'Create Account'}</button>
          )}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
