import React from 'react'
import Link from 'gatsby-link'
import freeplay01 from '../img/freeplay-1.jpg'
import freeplay02 from '../img/freeplay-2.jpg'
import freeplay03 from '../img/freeplay-3.jpg'


const Freplay = () => (
  <div className="container">
    <div className="columns">
      <div className="column">
      <Link className="cursor-pointer" to="/bonuses-free-play">
        <div className="card">
          <div className="card-image free-plays">
            <figure className="image">
              <img src={freeplay01} alt="Placeholder image"/>
            </figure>
            <p className="bonuses-info">
              <Link to="/bonuses-crypto">
                Freeplay
                <br/>
                <span>de cumpleños</span>
              </Link>
            </p>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">Jugada gratis de cumpleaños</p>
                <p className="subtitle is-6">Free play - directa $100</p>
                <Link to="/bonuses-free-play" className="button is-rounded">Obtener Freeplay</Link>
              </div>
            </div>
          </div>
        </div>
      </Link>
      </div>
      <div className="column">
        <Link className="cursor-pointer" to="/bonuses-free-play">
          <div className="card">
            <div className="card-image free-plays">
              <figure className="image">
                <img src={freeplay02} alt="Placeholder image"/>
              </figure>
              <p className="bonuses-info">
                <Link to="/bonuses-crypto">
                  Freeplay
                  <br/>
                  <span>$100 chip</span>
                </Link>
              </p>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4">$100 chip free play</p>
                  <p className="subtitle is-6">Free play - directa $100</p>
                  <Link to="/bonuses-free-play" className="button is-rounded">Obtener Freeplay</Link>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className="column">
        <Link className="cursor-pointer" to="/bonuses-free-play">
          <div className="card">
            <div className="card-image free-plays">
              <figure className="image">
                <img src={freeplay03} alt="Placeholder image"/>
              </figure>
              <p className="bonuses-info">
                <Link to="/bonuses-crypto">
                  Freeplay
                  <br/>
                  <span>7th depósito</span>
                </Link>
              </p>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4">7th depósito free play</p>
                  <p className="subtitle is-6">Free play - directa $100</p>
                  <Link to="/bonuses-free-play" className="button is-rounded">Obtener Freeplay</Link>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  </div>
)
export default Freplay
