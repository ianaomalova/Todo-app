import style from './ToDoForm.module.css'

const ToDoForm = () => {
  console.log(style);
  return (
    <div className={style.formWrapper}>
      <form>
        <input className={style.inputForm} type='text' placeholder='Enter new todo'/>
        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
    </div>
  )
}

export default ToDoForm