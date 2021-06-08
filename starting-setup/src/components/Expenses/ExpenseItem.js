import React from 'react';

import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  //const [title, setTitle] = useState(props.title); //set speical kind of variable
  // const clickHandler = () => {
  //   setTitle('updated');
  //   //console.log(title); //will output previous value, as setTitle scedules the eventual reavaluate of this component
  // };
  //<button onClick={clickHandler}>Change title</button>
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.price}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
