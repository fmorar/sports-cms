import React from 'react'
import Link from 'gatsby-link'
import icoCoinUser from '../img/ico-coin-user.svg'
import icoCoinMoney from '../img/ico-coin-money.svg'
import icoCoinOPlay from '../img/ico-coin-play.svg'

const Steps = () => (
  <div className="steps">
    <h2 className="steps__title">Three easy <br/> steps</h2>
    <p className="steps__text">Join us in three steps an start play</p>
    <div className="steps__img">
      <div className="steps__img-container">
        <img src={icoCoinUser} alt="icon user coin"/>
        <p>Singing up is quick <br/> and easy</p>
      </div>
      <div className="steps__img-container">
        <img src={icoCoinMoney} alt="icon user money"/>
        <p>Fund your account <br/> instanly</p>
      </div>
      <div className="steps__img-container">
        <img src={icoCoinOPlay} alt="icon user play"/>
        <p>Play! and start <br/> beatting</p>
      </div>
    </div>
  </div>
)
export default Steps
