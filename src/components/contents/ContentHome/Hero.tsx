import * as React from "react"
import hero from '../../../assets/imgs/hero.png'
import { DownArrow, IconEmail } from '../../../assets/icons/icons';

export default function Hero() {

  return (
    <div className="grid space-between grid-hero">
      <div className='grid-one'>
        <h1>Hola soy Daniel Márquez
          Un artista que vive en Amalfi - Antioquia
        </h1>
        <p>
          Inmortalizo recuerdo de personas, lugares o mascostas con retratos o pintura por encargo en acrilico, carbón o oleo.
        </p>
        <button className='button-form'>
          <span style={{ marginRight: '10px' }}><IconEmail /></span>
          daniel.marquez@gmail.com
        </button>
        <div style={{ display: 'flex' }}>
          <span style={{ marginRight: '10px' }}>
            <DownArrow />
          </span>
          <p>
            Trabajos Realizados
          </p>
        </div>
      </div>
      <div className='img-right img-hero grid-two' >
        <img src={hero} alt="photo" className='photo-circle' />
      </div>
    </div>
  );
}
