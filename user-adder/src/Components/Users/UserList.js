import React from 'react';
import classes from './UserList.module.css';
import Card from '../UI/Card';

const UserList = (props) => {
  return (
    <Card>
      <ul className={classes.items}>
        {props.items.map((item) => (
          <li key={item.id}>
            {item.name} ({item.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
