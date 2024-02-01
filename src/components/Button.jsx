import './Button.scss'

function Button({ msg }) {
    return (
        <div>
            <button className='button'>
               
                <span>{msg}</span>
            </button>
        </div>
    )
}

export default Button