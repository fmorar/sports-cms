import React from 'react'
import Link from 'gatsby-link'
import bonuses01 from '../img/bonuses-01.jpg'
import bonuses02 from '../img/bonuses-02.jpg'

const Bonuses = () => (
  <div className="container">
    <div className="bonuses">
      <div className="images-grid">
      <div className="columns">
        <div className="image image-big column is-6">
          <Link to="/bonuses-crypto"><img src={bonuses01} alt=""/></Link>
          <p className="bonuses-info">
            Crypto
            <br/>
            <span>Bonus</span>
          </p>
          <Link className="button is-text button__bonuses" to="/bonuses-crypto">Obtener ahora!</Link>
        </div>
        <div className="column is-6">
          <div className="image-small--container">
            <div className="columns">
              <div className="image image-small column is-6">
                <Link to="/bonuses-cash"><img src={bonuses02} alt=""/></Link>
                <p className="bonuses-info">
                  Bonos
                  <br/>
                  <span>en Efectivo</span>
                </p>
                <Link className="button is-text button__bonuses" to="/bonuses-cash">Obtener ahora!</Link>
              </div>

              <div className="image image-small column is-6">
                <Link to="/bonuses-reload"><img src={bonuses02} alt=""/></Link>
                <p className="bonuses-info">
                  Reload
                  <br/>
                  <span>Bonus</span>
                </p>
                <Link className="button is-text button__bonuses" to="/bonuses-reload">Obtener ahora!</Link>
              </div>

            </div>
            <div className="columns">
              <div className="image image-small column is-6">
               <Link to="/bonuses-referral"><img src={bonuses02} alt=""/></Link>
                <p className="bonuses-info">
                  Bonos
                  <br/>
                  <span>de referidos</span>
                </p>
                <Link className="button is-text button__bonuses" to="/bonuses-referral">Obtener ahora!</Link>
              </div>
              <div className="image image-small column is-6">
               <Link to="/register"><img src={bonuses02} alt=""/></Link>
                <p className="bonuses-info">
                  Registrate
                  <br/>
                  <span>Ahora para obtner un bonus</span>
                </p>
                <Link className="button is-text button__bonuses" to="/register">Registrate!</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
)
export default Bonuses
