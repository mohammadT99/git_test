import './style.scss'

const Input = ({type ,p, onChange   ,value , onInput, name}) => {
    return (
    
        <div className='input_content'>
            
        <input type={type}  name={name} value={value} onInput={onInput} className='input'onChange={onChange} placeholder={p} />
        </div>
    )
}

export default Input ;