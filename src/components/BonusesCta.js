import React from 'react'
import Link from 'gatsby-link'

const BonusesCta = () => (
  <div className="bonuses-cta">
    <div className="container">
      <div className="columns">
        <h2 className= "bonuses__title column is-9">
          200% FREE PLAY!
        </h2>
        <div className="column column__flex">
          <Link className="button is-rounded button__center" to="#">Get now!</Link>
        </div>
      </div>
    </div>
  </div>
)
export default BonusesCta