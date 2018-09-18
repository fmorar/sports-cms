import React from 'react'
import Link from 'gatsby-link'
import bonuses01 from '../img/bonuses-01.jpg'
import bonuses02 from '../img/bonuses-02.jpg'
import bonuses03 from '../img/bonuses-03.jpg'
import bonuses04 from '../img/bonuses-04.jpg'
import bonuses05 from '../img/bonuses-05.jpg'

const Bonuses = () => (
  <div className="container">
    <div className="bonuses">
      <div className="images-grid">
      <div className="columns">
        <div className="image image-big column is-6">
          <Link to="/bonuses-crypto"><img src={bonuses01} alt=""/></Link>
          <p className="bonuses-info">
            <Link to="/bonuses-crypto">
              Crypto
              <br/>
              <span>Bonus</span>
            </Link>
          </p>
          <Link className="button is-text button__bonuses" to="/bonuses-crypto">Obtener ahora!</Link>
        </div>
        <div className="column is-6">
          <div className="image-small--container">
            <div className="columns">
              <div className="image image-small column is-6">
                <Link to="/bonuses-cash"><img src={bonuses02} alt=""/></Link>
                <p className="bonuses-info">
                  <Link to="/bonuses-cash">
                    Cash
                    <br/>
                    <span>Bonus</span>
                  </Link>
                </p>
                <Link className="button is-text button__bonuses" to="/bonuses-cash">Obtener ahora!</Link>
              </div>

              <div className="image image-small column is-6">
                <Link to="/bonuses-reload"><img src={bonuses03} alt=""/></Link>
                <p className="bonuses-info">
                  <Link to="/bonuses-reload">
                    Reload
                    <br/>
                    <span>Bonus</span>
                  </Link>
                </p>
                <Link className="button is-text button__bonuses" to="/bonuses-reload">Obtener ahora!</Link>
              </div>

            </div>
            <div className="columns">
              <div className="image image-small column is-6">
               <Link to="/bonuses-referral"><img src={bonuses04} alt=""/></Link>
                <p className="bonuses-info">
                  <Link to="/bonuses-referral">
                    Referal
                    <br/>
                    <span>Bonus</span>
                  </Link>
                </p>
                <Link className="button is-text button__bonuses" to="/bonuses-referral">Obtener ahora!</Link>
              </div>
              <div className="image image-small column is-6">
               <Link to="/register"><img src={bonuses05} alt=""/></Link>
                <p className="bonuses-info">
                  <Link to="/register">
                    Registrate
                  </Link>
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
