import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css'
import ToDoForm from './components/Todos/ToDoForm/ToDoForm.jsx';
import ToDoList from './components/Todos/ToDoList/TodoList.jsx';


function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    const newTask = {
      id: uuidv4(),
      text: text,
      completed: false
    }
    setTodos([...todos, newTask])
  }

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter(todo => {
      return todo.id !== id;
    }))
  }

  const toggleTodoHander = (id) => {
    setTodos(todos.map(todo => {
      return todo.id === id ? {...todo, completed: !todo.completed} : {...todo}
    }))
  }

  return (
    <>
      <h1>To Do App</h1>
      <ToDoForm addTodo={addTodoHandler}/>
      <div className='line'></div>
      <ToDoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHander}
      />
    </>
  )
}

export default App
