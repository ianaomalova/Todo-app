import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css'
import ToDoForm from './components/Todos/ToDoForm/ToDoForm.jsx';
import ToDoList from './components/Todos/ToDoList/TodoList.jsx';
import ToDoActions from './components/Todos/ToDoActions/ToDoActions.jsx';


function App() {
  const [todos, setTodos] = useState([]);
  const completedTodosCount = todos.filter(todo => todo.completed).length;
  console.log(completedTodosCount);

  const addTodoHandler = (text) => {
    const newTask = {
      id: uuidv4(),
      text: text,
      completed: false
    }
    setTodos([newTask, ...todos])
  }

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter(todo => {
      return todo.id !== id;
    }))
  }

  const toggleTodoHander = (id) => {
    const updatedTodos = todos.map(todo => {
      return todo.id === id ? {...todo, completed: !todo.completed} : {...todo}
    })

    const sorted = [
      ...updatedTodos.filter(todo => !todo.completed),
      ...updatedTodos.filter(todo => todo.completed)
    ]

    setTodos(sorted);
  }

  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter(todo => {
      return !todo.completed;
    }))
  }

  const resetTodoHandler= () => {
    setTodos([]);
  }

  return (
    <>
      <h1>To Do App</h1>
      <ToDoForm addTodo={addTodoHandler}/>
      {todos.length >0 && <ToDoActions
        resetTodo={resetTodoHandler}
        deleteCompletedTodo={deleteCompletedTodosHandler}
        completedTodosExist={!!completedTodosCount}
      />}
      <ToDoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHander}
      />
    </>
  )
}

export default App
