
import './style.scss' ;
const Button = ({onClick  , className , type , name}) => {
    return (
        <>
        <button type={type} className={` ${className === 'btn' ? 'btn': 'module_btn'}`} onClick={onClick}>{name}</button>
        </>
    )
}

export default Button ;