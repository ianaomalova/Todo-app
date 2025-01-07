import style from './ToDoForm.module.css'
import {useState} from 'react';

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
          className='btn btn-primary'
        >Добавить
        </button>
      </form>
    </div>
  )
}

export default ToDoForm