import { useState } from 'react';
import { Button } from 'react-native';

import MainLayout from "../layouts/MainLayout";
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

const HomeScreen = ({ navigation }) => {

  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  const addTask = (taskText) => {

    // Don't allow duplicate tasks.
    if (tasks.includes(taskText)) {
      alert('duplicate task');
      return;
    }

    setTasks([...tasks, taskText]);
  };

  return (
    <MainLayout>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
      <TodoList tasks={tasks} />
      <TodoForm addTask={addTask} />
    </MainLayout>
  )
};

export default HomeScreen;