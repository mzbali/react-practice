import { useState } from 'react';

const BasicForm = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [isNameValid, setIsNameValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDeafault();
    const enteredValue = event.target.value;
    if (enteredValue.trim().length === 0) {
      setIsNameValid(false);
      return;
    }
    setIsNameValid(true);
    console.log(enteredValue);
  };

  return (
    <form>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input type="text" id="name" />
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
