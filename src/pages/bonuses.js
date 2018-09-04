import React from 'react'
import Link from 'gatsby-link'
import BonusesPage from '../components/Bonuses'
import BonusesCta from '../components/BonusesCta'

export default class Bonuses extends React.Component {
  render() {
    return (
		<div className="bonuses-page">
			<div className="bonuses--hero">
				<h2 className="section-title title title__main is-size-3 has-text-weight-bold is-bold-light text-center">Bonus</h2>
			</div>
			<div className="section">
				<div className="container">
					<BonusesPage/>
				</div>
			</div>
			<BonusesCta/>
		</div>
    )
  }
}