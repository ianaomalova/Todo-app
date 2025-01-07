import style from './Todo.module.css'

const Todo = ({todo}) => {
  return (
    <div className={style.toDoElement}>
      <img src='/src/assets/icons/check.png' alt=''/>
      <h2 className={style.titleTask}>{todo}</h2>
    </div>
  )
}

export default Todo