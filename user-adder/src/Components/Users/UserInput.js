import React, { useState, useRef } from 'react';
import styles from './UserInput.module.css';
import Card from '../UI/Card';
import UserModal from '../UI/UserModal';
import Wrapper from '../Helpers/Wrapper';

const UserInput = (props) => {
  const usernameInput = useRef();
  const ageInput = useRef();
  const [modal, setModal] = useState();
  const dataHandler = (event) => {
    event.preventDefault();
    const userName = usernameInput.current.value;
    const age = ageInput.current.value;
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
      age: +age,
      id: Math.random().toString(),
    };
    props.onSubmit(data);
    usernameInput.current.value = '';
    ageInput.current.value = '';
  };
  const modalClose = () => {
    setModal();
  };
  return (
    <Wrapper>
      {modal && <UserModal modalMsg={modal} onClose={modalClose} />}
      <Card>
        <form className={styles.inputControls} onSubmit={dataHandler}>
          <div className={styles.inputControl}>
            <label>UserName</label>
            <input ref={usernameInput} />
          </div>
          <div className={styles.inputControl}>
            <label>Age</label>
            <input type="number" ref={ageInput} />
          </div>
          <div className={styles.inputControl}>
            <button type="submit">Add User</button>
          </div>
        </form>
      </Card>
    </Wrapper>
  );
};

export default UserInput;
