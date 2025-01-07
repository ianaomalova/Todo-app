import { RiDeleteBin5Fill } from "react-icons/ri";
import { RiResetLeftFill } from "react-icons/ri";
import style from './ToDoActions.module.css'
import Button from '../../UI/Button.jsx'

const ToDoActions = ({resetTodo, deleteCompletedTodo, completedTodosExist}) => {
  return (
    <div className={style.wrapper}>
      <Button title='Сбросить все задачи' onСlick={resetTodo}>
        <RiResetLeftFill color='green' />
      </Button>
      <Button title='Удалить завершенные' onСlick={deleteCompletedTodo} disable={!completedTodosExist}>
        <RiDeleteBin5Fill color='red'/>
      </Button>
    </div>
  )
}

export default ToDoActions