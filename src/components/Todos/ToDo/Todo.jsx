import {IoCheckmarkDoneSharp} from "react-icons/io5";
import {MdOutlineDelete} from "react-icons/md";
import {GrTask} from "react-icons/gr";
import cn from 'classnames';
import style from './Todo.module.css'

const Todo = ({todo, deleteTodo, toggleTodo}) => {
  return (
    <div className={cn(style.toDoElement, {[style.completed]: todo.completed})}
         onDoubleClick={() => toggleTodo(todo.id)}>
      <div className={style.leftInfo}>
        <GrTask className={style.iconTask}/>
        <p className={style.titleTask}>{todo.text}</p>
      </div>
      <div className={style.rightInfo}>
        <IoCheckmarkDoneSharp className={style.icon} onClick={() => toggleTodo(todo.id)}/>
        <MdOutlineDelete className={style.icon} onClick={() => deleteTodo(todo.id)}/>
      </div>
    </div>
  )
}

export default Todo