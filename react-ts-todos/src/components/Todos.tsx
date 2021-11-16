import { useContext } from 'react';
import { TodoContext } from '../store/todos-context';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';

const Todos: React.FC = (props) => {
  const todoCtx = useContext(TodoContext);
  return (
    <ul className={classes.todos}>
      {todoCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onClick={todoCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
