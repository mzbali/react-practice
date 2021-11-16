import React from 'react';
import Todo from '../models/todo';
import { useState } from 'react';

type TodoContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodoContext = React.createContext<TodoContextObj>({
  //when declaring set the type of them as well
  items: [],
  addTodo: (todoText: string) => {},
  removeTodo: (todoId: string) => {},
});

const TodoContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);
    setTodos((state) => {
      return state.concat(newTodo);
    });
  };
  const removeTodoHandler = (todoId: string) => {
    setTodos((state) => {
      return state.filter((todo) => todo.id !== todoId);
    });
  };

  const todoContextValue: TodoContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodoContext.Provider value={todoContextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
