import { useContext, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../store/auth-context';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const history = useHistory();
  const passwordInputRef = useRef();
  const authCtx = useContext(AuthContext);
  const changePasswordHandler = async (event) => {
    event.preventDefault();
    const password = passwordInputRef.current.value;
    try {
      const response = await fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyA4hYny7LLFt-A0LWwkrb3_SWgCfpQR4Aw',
        {
          method: 'POST',
          body: JSON.stringify({
            idToken: authCtx.token,
            password: password,
            returnSecureToken: false,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error.message);
      }
      history.replace('/');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={passwordInputRef} />
      </div>
      <div className={classes.action}>
        <button onClick={changePasswordHandler}>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
