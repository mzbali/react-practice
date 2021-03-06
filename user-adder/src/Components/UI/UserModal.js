import React from 'react';
import ReactDOM from 'react-dom';
import classes from './UserModal.module.css';
import Card from './Card';

const Modal = (props) => {
  return (
    <div className={classes.modal} onClick={props.onClose}>
      <Card className={classes.contents} onClick={(e) => e.stopPropagation()}>
        <div className={classes.header}>
          <header className={classes.header}>
            <h4>Invalid Value</h4>
          </header>
        </div>
        <div className={classes.contents}>
          <p>{props.modalMsg}</p>
        </div>
        <footer className={classes.footer}>
          <button onClick={props.onClose}>Close</button>
        </footer>
      </Card>
    </div>
  );
};

const UserModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Modal modalMsg={props.modalMsg} onClose={props.onClose} />,
        document.getElementById('modal')
      )}
    </React.Fragment>
  );
};
export default UserModal;
