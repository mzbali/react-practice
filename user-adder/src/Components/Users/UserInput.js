import React, { useState } from 'react';
import styles from './UserInput.module.css';
import Card from '../UI/Card';
import UserModal from '../UI/UserModal';

const UserInput = (props) => {
  const [userName, setUserName] = useState('');
  const [age, setAge] = useState('');
  const [modal, setModal] = useState();
  const userNameHandler = (event) => {
    setUserName(event.target.value);
  };
  const ageHandler = (event) => {
    setAge(event.target.value);
  };
  const dataHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length * age.trim().length <= 0) {
      const errMsg = 'Please Enter a valid name or age.';
      return setModal(errMsg);
    }
    if (+age <= 0) {
      const errMsg = 'Please Enter a valid age. (>0)';
      return setModal(errMsg);
    }
    const data = {
      name: userName,
      age: parseFloat(age),
      id: Math.random(),
    };
    props.onSubmit(data);
    setUserName('');
    setAge('');
  };
  const modalClose = () => {
    setModal();
  };
  return (
    <Card>
      {modal && <UserModal modalMsg={modal} onClose={modalClose} />}
      <form className={styles.inputControls} onSubmit={dataHandler}>
        <div className={styles.inputControl}>
          <label>UserName</label>
          <input onChange={userNameHandler} value={userName} />
        </div>
        <div className={styles.inputControl}>
          <label>Age</label>
          <input type="number" onChange={ageHandler} value={age} />
        </div>
        <div className={styles.inputControl}>
          <button type="submit">Add User</button>
        </div>
      </form>
    </Card>
  );
};

export default UserInput;
