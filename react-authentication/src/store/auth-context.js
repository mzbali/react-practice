import React, { useState } from 'react';

const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export default AuthContext;

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState();
  const isLoggedIn = !!token; // value to boolean if 'abc' then becomes true;

  const loginHandler = (givenToken) => {
    setToken(givenToken);
  };
  const logoutHandler = () => {
    setToken(null);
  };

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
