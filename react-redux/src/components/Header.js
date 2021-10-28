import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store';
import classes from './Header.module.css';

const Header = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  const navList = (
    <ul>
      <li>
        <a href="/">My Products</a>
      </li>
      <li>
        <a href="/">My Sales</a>
      </li>
      <li>
        <button onClick={logoutHandler}>Logout</button>
      </li>
    </ul>
  );

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>{isAuthenticated && navList}</nav>
    </header>
  );
};

export default Header;
