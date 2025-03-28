import style from './Button.module.css'
import cn from 'classnames'

const Button = (props) => {
  const {children, disabled = false, ...otherProps} = props
  console.log(props)
  return (
    <button
      {...otherProps}
      className={style.myButton}
      disabled={disabled}
    >
      {children}
    </button>)
}

export default Button