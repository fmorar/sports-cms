import React from 'react'
import Link from 'gatsby-link'

const CrytpCta = () => (
  <div className="container">
    <div className="columns">
      <h2 className= "crypto__title column is-9">
        How to use cryptocurrency 
        <br /> 
        to beatting
      </h2>
      <div className="column column__flex">
        <Link className="button is-outlined is-rounded button__center" to="#">Learn more!</Link>
      </div>
    </div>
  </div>
)
export default CrytpCta
