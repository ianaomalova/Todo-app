import Todo from '../ToDo/Todo.jsx';
import style from './TodoList.module.css'

const ToDoList = ({todos, deleteTodo, toggleTodo}) => {
  return (
    <>
      {todos.length > 0 ?
        todos.map((todo) => {
          return <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
      }) :
        (
          <div className={style.empty}>
            <h2>Список задач пуст </h2>
            <img src="/src/assets/icons/party-popper.png" alt="Empty list" />
          </div>
        )
      }
    </>
  )
}

export default ToDoList