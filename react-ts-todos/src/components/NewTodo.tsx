import React, { useContext, useRef } from 'react';
import { TodoContext } from '../store/todos-context';
import classes from './NewTodo.module.css';

const NewTodo: React.FC = () => {
  const todoInputFormRef = useRef<HTMLInputElement>(null);
  const todoCtx = useContext(TodoContext);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const inputText = todoInputFormRef.current!.value;

    if (inputText.trim().length === 0) {
      return;
    }
    todoCtx.addTodo(inputText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="todoText">Enter Todo</label>
      <input type="text" id="todoText" ref={todoInputFormRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
