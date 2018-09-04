import React from 'react'
import Link from 'gatsby-link'
import icoCoinUser from '../img/ico-coin-user.svg'
import icoCoinMoney from '../img/ico-coin-money.svg'
import icoCoinOPlay from '../img/ico-coin-play.svg'

const Steps = () => (
  <div className="steps">
    <div className="steps__content columns">
      <h2 className="steps__title column">Tres sencillos<br/> pasos</h2>
      <p className="steps__text column">Unete a nosotros en 3 sencillos pasos y comienza jugar</p>
    </div>
    <div className="steps__img columns">
      <div className="steps__img-container column text-center">
        <img src={icoCoinUser} alt="icon user coin"/>
        <p>Registrarse es sencillo <br/> y facil</p>
      </div>
      <div className="steps__img-container column text-center">
        <img src={icoCoinMoney} alt="icon user money"/>
        <p>Cree su cuenta <br/> instataneamente</p>
      </div>
      <div className="steps__img-container column text-center">
        <img src={icoCoinOPlay} alt="icon user play"/>
        <p>Comience a <br/> juegar</p>
      </div>
    </div>
  </div>
)
export default Steps
