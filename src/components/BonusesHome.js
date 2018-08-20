import React from 'react'
import Link from 'gatsby-link'
import bonuses01 from '../img/bonuses-01.jpg'
import bonuses02 from '../img/bonuses-02.jpg'

const BonusesHome = () => (
  <div className="container">
    <div className="bonuses">
      <div className="images-grid">
      <div className="columns">
        <div className="image image-big column is-6">
          <img src={bonuses01} alt=""/>
          <p className="bonuses-info">
            200%
            <br/>
            <span>FREE PLAY!</span>
          </p>
          <Link className="button is-text" to="/">Get Now!</Link>
        </div>
        <div className="column is-6">
          <div className="image-small--container">
            <div className="columns">
              <div className="image image-small column">
                <img src={bonuses02} alt=""/>
                <p className="bonuses-info">
                  200%
                  <br/>
                  <span>FREE PLAY!</span>
                </p>
                <Link className="button is-text" to="/">Get Now!</Link>
              </div>
              <div className="image image-small column">
                <img src={bonuses02} alt=""/>
                <p className="bonuses-info">
                  200%
                  <br/>
                  <span>FREE PLAY!</span>
                </p>
                <Link className="button is-text" to="/">Get Now!</Link>
              </div>
            </div>
            <div className="columns">
              <div className="image image-small column">
                <img src={bonuses02} alt=""/>
                <p className="bonuses-info">
                  200%
                  <br/>
                  <span>FREE PLAY!</span>
                </p>
                <Link className="button is-text" to="/">Get Now!</Link>
              </div>
              <div className="image image-small column">
                <img src={bonuses02} alt=""/>
                <p className="bonuses-info">
                  200%
                  <br/>
                  <span>FREE PLAY!</span>
                </p>
                <Link className="button is-text" to="/">Get Now!</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
)
export default BonusesHome
