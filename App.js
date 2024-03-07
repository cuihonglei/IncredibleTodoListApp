import { useState } from 'react';
import { SafeAreaView } from 'react-native';
import TodoList from './TodoList';
import TodoForm from './TodoForm';


export default function App() {

  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  return (
    <SafeAreaView>
      <TodoList tasks={tasks} />
      <TodoForm />
    </SafeAreaView>
  );
}