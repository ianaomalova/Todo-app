import style from './Button.module.css'

const Button = ({onclick, children, title, disable = false}) => {
  return (
    <button
      className={style.myButton}
      onClick={onclick}
      disabled={disable}
      title={title}
    >
      {children}
    </button>)
}

export default Button