import React from 'react'
import Link from 'gatsby-link'
import icoCoinUser from '../img/ico-coin-user.svg'
import icoCoinMoney from '../img/ico-coin-money.svg'
import icoCoinOPlay from '../img/ico-coin-play.svg'

const Steps = () => (
  <div className="steps">
    <div className="steps__content columns">
      <h2 className="steps__title column">Three easy <br/> steps</h2>
      <p className="steps__text column">Join us in three steps an start play</p>
    </div>
    <div className="steps__img columns">
      <div className="steps__img-container column text-center">
        <img src={icoCoinUser} alt="icon user coin"/>
        <p>Singing up is quick <br/> and easy</p>
      </div>
      <div className="steps__img-container column text-center">
        <img src={icoCoinMoney} alt="icon user money"/>
        <p>Fund your account <br/> instanly</p>
      </div>
      <div className="steps__img-container column text-center">
        <img src={icoCoinOPlay} alt="icon user play"/>
        <p>Play! and start <br/> beatting</p>
      </div>
    </div>
  </div>
)
export default Steps
