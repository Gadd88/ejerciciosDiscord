import Card from '../card/Card'
import Card2 from '../card/Card2'
import './cardcontainer.css'
import sedan from '../../../3-column/3-column-preview-card-component-main/images/icon-sedans.svg'
import suvs from '../../../3-column/3-column-preview-card-component-main/images/icon-suvs.svg'
import luxury from '../../../3-column/3-column-preview-card-component-main/images/icon-luxury.svg'
import Button from '../button/Button'

const CardContainer = () => {
  
  return (
    <div className='cardContainer'>
      {/* con CHILDREN */}
      <Card2 propiedadClase="sedan">
        <img src={sedan} alt="" />
        <h1>Sedan</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eligendi tenetur minima dolore perferendis, tempore ea quaerat nemo ipsum voluptas.</p>
        <Button 
          texto="soy un boton" />
      </Card2>

      {/* con PROPS */}
      <Card 
          titulo="LUXURY" 
          parrafo="Cruise in the best car brands without the bloated prices." 
          icono={luxury} 
          clase="luxury"/>
      <Card 
          titulo="LUXURY" 
          parrafo="Cruise in the best car brands without the bloated prices." 
          icono={suvs} 
          clase="suvs"/>
    </div>
  )
}

export default CardContainer