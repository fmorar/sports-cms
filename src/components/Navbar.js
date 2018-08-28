import React from 'react'
import Link from 'gatsby-link'
import logo from '../img/logo.svg'

const Navbar = () => (
  <nav className="navbar is-transparent container is-fluid">
    <div className="navbar-brand">
      <Link to="/">
        <figure className="image">
          <img src={logo} alt="Vipsportbook"/>
        </figure>
      </Link>
      <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div id="navbarExampleTransparentExample" className="navbar-menu">
      <div className="navbar-start">
        <Link className="navbar-item navbar-item__parent" to="/">
         Inicio
        </Link>
        <Link className="navbar-item" to="/bonuses">
         Bonus
        </Link>
        <Link className="navbar-item" to="/products">
         Deportes
        </Link>
        <Link className="navbar-item" to="/products">
         Sportbook
        </Link>
        <div className="navbar-item has-dropdown is-hoverable">
          <p className="navbar-link">
            Apuestas
          </p>
          <div className="navbar-dropdown is-boxed">
            <Link className="navbar-item navbar-item__responsive" to="/">
              Casino virtual
            </Link>
            <Link className="navbar-item navbar-item__responsive" to="/">
              Casino en vivo
            </Link>
            <Link className="navbar-item navbar-item__responsive" to="/">
              Como jugar
            </Link>
          </div>
        </div>
        <Link className="navbar-item" to="/products">
         Banking
        </Link>
        <Link className="navbar-item" to="/blog">
         Blog
        </Link>
        <Link className="button is-outlined is-rounded" to="/register">
         Registrese
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
