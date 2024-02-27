import './card.css'
const Card2 = ({children, propiedadClase}) => {
  return (
    <div className={`card2 ${propiedadClase}`}>
        {children}
    </div>
  )
}

export default Card2