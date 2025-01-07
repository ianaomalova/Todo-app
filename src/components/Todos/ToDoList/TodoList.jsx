import Todo from '../ToDo/Todo.jsx';

const ToDoList = ({todos, deleteTodo}) => {
  return (
    <>
      {todos.length > 0 ?
        todos.map((todo, index) => {
          return <Todo key={index} todo={todo} deleteTodo={deleteTodo} index={index} />
      }) :
        <h2>To do list is empty</h2>}
    </>
  )
}

export default ToDoList