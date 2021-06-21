import React, { useState } from 'react';
import styles from './App.module.css';
import UserList from './Components/Users/UserList';
import UserInput from './Components/Users/UserInput';
const INITIAL_USER = [
  { name: 'Colt', age: 28, id: Math.random() },
  { name: 'Max', age: 32, id: Math.random() },
];
function App() {
  const [users, setUsers] = useState(INITIAL_USER);
  const newUserHandle = (data) => {
    setUsers((prevUsers) => {
      data = [data, ...prevUsers];
      return data;
    });
  };
  return (
    <div className={styles.App}>
      <UserInput onSubmit={newUserHandle} />
      <UserList items={users} />
    </div>
  );
}

export default App;
