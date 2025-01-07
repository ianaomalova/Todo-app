import style from './Todo.module.css'

const Todo = () => {
  return (
    <div className={style.toDoElement}>
      <img src='/src/assets/icons/check.png' alt=''/>
      <h2 className={style.titleTask}>Title task</h2>
    </div>
  )
}

export default Todo