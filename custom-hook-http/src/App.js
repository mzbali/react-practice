import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/use-http';

function App() {
  const [tasks, setTasks] = useState([]);
  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  useEffect(() => {
    const taskApply = (taskData) => {
      const taskList = [];
      for (let taskKey in taskData) {
        taskList.push({ id: taskKey, text: taskData[taskKey].text });
      }
      setTasks(taskList);
    };
    fetchTasks(
      {
        url: 'https://react-http-d90c3-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json',
      },
      taskApply
    );
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
