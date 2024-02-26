import { SafeAreaView } from 'react-native';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

export default function App() {
  return (
    <SafeAreaView>
      <TodoList />
      <TodoForm />
    </SafeAreaView>
  );
}