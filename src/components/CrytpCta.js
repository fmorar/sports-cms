import React from 'react'
import Link from 'gatsby-link'

const CrytpCta = () => (
  <div className="container">
    <div className="columns">
      <h2 className= "crypto__title column is-9">
        Como usar criptomonedas 
        <br /> 
        para jugar
      </h2>
      <div className="column column__flex">
        <Link className="button is-rounded button__center" to="/bet-cryptocurrency">Aprende más!</Link>
      </div>
    </div>
  </div>
)
export default CrytpCta
