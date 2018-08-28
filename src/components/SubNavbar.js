import React from 'react'
import Link from 'gatsby-link'
import icoUser from '../img/ico-user.svg'

const SubNavbar = () => (
  <div className="columns is-mobile is-fluid navbar-sub container is-fluid">
    <ul className="column translate">
      <li className="translate--item">en</li>
      <li className="translate--item">es</li>
    </ul>
    <div className="column singup">
      <span className="singup--ico">
        <figure className="image is-32x32">
          <img src={icoUser} alt="Vipsportbook"/>
        </figure>
      </span>
      <Link className="singup--item" to="sing-up">Iniciar sesión</Link>
    </div>
  </div>
)
export default SubNavbar
