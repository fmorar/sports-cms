import React from 'react'
import Link from 'gatsby-link'
import BonusesCta from '../components/BonusesCta'


export default class Lines extends React.Component {
  render() {
    return (
			<div className="bets-page"> 
				<div className="section-title bets--hero">
					<h2 className="title title__main is-size-3 has-text-weight-bold is-bold-light text-center">Proximos juegos</h2>
				</div>

				<div className="lines">
					{/*Lines code goes here*/}
				</div>

				<BonusesCta/>
			</div>
    )
  }
}