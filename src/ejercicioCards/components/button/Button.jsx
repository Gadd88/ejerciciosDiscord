import './button.css'

const Button = ({texto}) => {
  
  return (
    <button
      className="btn-card">
        {texto}
    </button>
  )
}

export default Button