import React, { useState, useEffect, useCallback } from 'react';

let logoutTimer;

const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export default AuthContext;

const expTimeCounter = (expTime) => {
  const currentTime = new Date().getTime();
  const expirationTime = new Date(expTime).getTime();
  const remainingTime = expirationTime - currentTime;
  return remainingTime;
};

const retrieveInfo = () => {
  const storageToken = localStorage.getItem('token');
  const expirationTime = localStorage.getItem('expirationTime');
  const expTimeValidity = expTimeCounter(expirationTime);
  if (expTimeValidity <= 60000) {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
    return null;
  }
  return {
    token: storageToken,
    expirationTime: expTimeValidity,
  };
};

export const AuthContextProvider = (props) => {
  const storageValues = retrieveInfo();
  const [token, setToken] = useState(
    storageValues ? storageValues.token : null
  );
  const isLoggedIn = !!token; // value to boolean if 'abc' then becomes true;

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
    clearTimeout(logoutTimer);
  }, []);
  const loginHandler = (givenToken, expTime) => {
    setToken(givenToken);
    const expirationTime = expTimeCounter(expTime);
    localStorage.setItem('token', givenToken);
    localStorage.setItem('expirationTime', expTime);
    logoutTimer = setTimeout(logoutHandler, expirationTime);
  };

  useEffect(() => {
    if (storageValues) {
      //console.log(storageValues.expirationTime);
      logoutTimer = setTimeout(logoutHandler, storageValues.expirationTime);
    }
  }, [storageValues, logoutHandler]);

  const authContextValue = {
    token,
    isLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
