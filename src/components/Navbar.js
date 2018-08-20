import React from 'react'
import Link from 'gatsby-link'
import logo from '../img/logo.svg'

const Navbar = () => (
  <nav className="navbar is-transparent container is-fluid">
    <div className="navbar-brand">
      <figure className="image">
        <img src={logo} alt="Vipsportbook"/>
      </figure>
      <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div id="navbarExampleTransparentExample" className="navbar-menu">
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
if(typeof document !== "undefined") { 
  document.addEventListener('DOMContentLoaded', () => {
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    if ($navbarBurgers.length > 0) {
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
          const target = el.dataset.target;
          const $target = document.getElementById(target);
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    }
  });
}
export default Navbar
