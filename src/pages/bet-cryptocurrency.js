import React from 'react'
import Link from 'gatsby-link'
import BonusesCta from '../components/BonusesCta'

export default class Cryptocurrency extends React.Component {
  render() {
    return (
		<div className="cryptocurrency-page"> 
			<div className="cryptocurrency--hero section-title">
				<h2 className="title title__main is-size-3 has-text-weight-bold is-bold-light text-center">Criptomonedas</h2>
			</div>
			<div className="section">
				<div className="container">
					
				</div>
			</div>
			<BonusesCta/>
		</div>
    )
  }
}