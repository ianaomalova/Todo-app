import './App.css'
import ToDoForm from './components/Todos/ToDoForm/ToDoForm.jsx';
import ToDoList from './components/Todos/ToDoList/TodoList.jsx';
import {useState} from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  const deleteTodoHandler = (index) => {
    setTodos(todos.filter((_, idx) => {
      return idx !== index;
    }))
  }

  return (
    <>
      <h1>To Do App</h1>
      <ToDoForm addTodo={addTodoHandler}/>
      <ToDoList todos={todos} deleteTodo={deleteTodoHandler} />
    </>
  )
}

export default App
