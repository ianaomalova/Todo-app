import style from './ToDoForm.module.css'
import {useState} from 'react';
import { MdAddTask } from "react-icons/md";

const ToDoForm = ({addTodo}) => {
  const [text, setText] = useState('')

  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTodo(text);
    setText('');
  }

  return (
    <div className={style.formWrapper}>
      <form onSubmit={onSubmitHandler}>
        <input
          className={style.inputForm}
          type='text'
          placeholder='Новая задача'
          value={text}
          onChange={event => setText(event.target.value)}
        />
        <button
          type='submit'
        ><MdAddTask />
        </button>
      </form>
    </div>
  )
}

export default ToDoForm