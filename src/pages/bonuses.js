import React from 'react'
import Link from 'gatsby-link'
import bonuses01 from '../img/bonuses-01.jpg'
import bonuses02 from '../img/bonuses-02.jpg'

export default class Bonuses extends React.Component {
  render() {
    return (
		<div className="bonuses-page">
			<div className="bonuses--hero">
				<h2 className="section-title title title__main is-size-3 has-text-weight-bold is-bold-light text-center">Bonus</h2>
			</div>
			<div className="section">
				<div className="container">
				    <div className="bonuses">
				      <div className="images-grid">
				      <div className="columns">
				        <div className="image image-big column is-6">
				          <img src={bonuses01} alt=""/>
				          <p className="bonuses-info">
				            200%
				            <br/>
				            <span>Free play!</span>
				          </p>
				          <Link className="button is-text button__bonuses" to="/">Get Now!</Link>
				        </div>
				        <div className="column is-6">
				          <div className="image-small--container">
				            <div className="columns">
				              <div className="image image-small column">
				                <img src={bonuses02} alt=""/>
				                <p className="bonuses-info">
				                  200%
				                  <br/>
				                  <span>Free play!</span>
				                </p>
				                <Link className="button is-text button__bonuses" to="/">Get Now!</Link>
				              </div>
				              <div className="image image-small column">
				                <img src={bonuses02} alt=""/>
				                <p className="bonuses-info">
				                  200%
				                  <br/>
				                  <span>Free play!</span>
				                </p>
				                <Link className="button is-text button__bonuses" to="/">Get Now!</Link>
				              </div>
				            </div>
				            <div className="columns">
				              <div className="image image-small column">
				                <img src={bonuses02} alt=""/>
				                <p className="bonuses-info">
				                  200%
				                  <br/>
				                  <span>Free play!</span>
				                </p>
				                <Link className="button is-text button__bonuses" to="/">Get Now!</Link>
				              </div>
				              <div className="image image-small column">
				                <img src={bonuses02} alt=""/>
				                <p className="bonuses-info">
				                  200%
				                  <br/>
				                  <span>Free play!</span>
				                </p>
				                <Link className="button is-text button__bonuses" to="/">Get Now!</Link>
				              </div>
				            </div>
				          </div>
				        </div>
				      </div>
				      </div>
				    </div>
				</div>
			</div>
		</div>
    )
  }
}