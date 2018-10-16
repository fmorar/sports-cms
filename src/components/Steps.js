import React from 'react'
import Link from 'gatsby-link'
import icoCoinUser from '../img/ico-coin-user.svg'
import icoCoinMoney from '../img/ico-coin-money.svg'
import icoCoinOPlay from '../img/ico-coin-play.svg'

const Steps = () => (
  <div className="steps">
    <div className="columns center-content">
      <div className="column display-center">
        <div className="steps__content columns">
          <h2 className="steps__title column">Tres sencillos<br/> pasos</h2>
          <p className="steps__text column">Únete a nosotros en 3 sencillos pasos y comienza jugar</p>
        </div>
      </div>
      <div className="column display-center">
        <div className="steps__img columns">
          <div className="steps__img-container column text-center">
            <img src={icoCoinUser} alt="icon user coin"/>
            <p>Regístrate, es sencillo <br/> y fácil</p>
          </div>
          <div className="steps__img-container column text-center">
            <img src={icoCoinMoney} alt="icon user money"/>
            <p>Haz el primer <br/> depósito</p>
          </div>
          <div className="steps__img-container column text-center">
            <img src={icoCoinOPlay} alt="icon user play"/>
            <p>Comienza a <br/> jugar</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)
export default Steps
