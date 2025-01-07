import style from './Button.module.css'

const Button = ({onСlick, children, title, disable = false}) => {
  return (
    <button
      className={style.myButton}
      onClick={onСlick}
      disabled={disable}
      title={title}
    >
      {children}
    </button>)
}

export default Button