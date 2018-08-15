import React from 'react'
import Link from 'gatsby-link'

import logo from '../img/logo.svg'

const Navbar = () => (
  <nav className="navbar">
    <div className="container is-fluid">
      <div className="navbar-brand">
        <Link to="/">
          <figure className="image">
            <img src={logo} alt="Vipsportbook"/>
          </figure>
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          Home
        </Link>
        <Link className="navbar-item" to="/products">
          Sports
        </Link>
        <Link className="navbar-item" to="/products">
          Betting
        </Link>
        <Link className="navbar-item" to="/products">
          Rules
        </Link>
        <Link className="navbar-item" to="/products">
          Bonuses
        </Link>
        <Link className="navbar-item" to="/products">
          Banking
        </Link>
        <Link className="button is-outlined is-rounded" to="/products">
          Join us
        </Link>
      </div>
    </div>
  </nav>
)

export default Navbar
