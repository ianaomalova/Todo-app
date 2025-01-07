import './App.css'
import ToDoForm from './components/Todos/ToDoForm/ToDoForm.jsx';
import ToDoList from './components/Todos/ToDoList/TodoList.jsx';

function App() {

  return (
    <>
      <h1>To Do App</h1>
      <ToDoForm />
      <ToDoList />
    </>
  )
}

export default App
