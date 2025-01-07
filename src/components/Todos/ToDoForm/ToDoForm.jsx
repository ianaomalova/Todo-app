import style from './ToDoForm.module.css'
import {useState} from 'react';
import { MdAddTask } from "react-icons/md";
import Button from '../../UI/Button.jsx';

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
        <Button
          title='Добавить задачу'
          type='submit'
          disabled={!text.trim()}
          style={{ padding: '11px 11px' }}
        ><MdAddTask/>
        </Button>
      </form>
    </div>
  )
}

export default ToDoForm