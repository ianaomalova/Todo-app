import style from './TodoList.module.css';
import Todo from '../ToDo/Todo.jsx';

const ToDoList = ({todos}) => {
  return (
    <>
      {todos.map((todo, index) => {
        return <Todo key={index} todo={todo} />
      })}
    </>
  )
}

export default ToDoList