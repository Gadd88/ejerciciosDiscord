import Button from '../button/Button'
import './card.css'
import Proptypes from 'prop-types'

const Card = ({clase, icono, titulo, parrafo}) => {
  Card.propTypes = {
    clase: Proptypes.string,
    icono: Proptypes.string,
    titulo: Proptypes.string,
    parrafo: Proptypes.string
  }
  return (
    <div className={`card ${clase}`}>
        <img src={icono} alt="" />
        <h2>{titulo}</h2>
        <p>{parrafo}</p>
        <Button texto="Learn More"/>
    </div>
  )
}

export default Card