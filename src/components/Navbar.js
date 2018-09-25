import React from 'react'
import Link from 'gatsby-link'
import logo from '../img/logo.svg'
const Navbar = () => (
  <nav className="navbar is-transparent container is-fluid">
    <div className="navbar-brand">
      <Link to="/">
        <figure className="image">
          <img src={logo} alt="Vipsportbook" width="300" height="61"/>
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
        <div className="navbar-item has-dropdown is-hoverable">
          <span className="navbar-link">
            Bonus
          </span>
          <div className="navbar-dropdown is-boxed">
            <Link className="navbar-item navbar-item__responsive" to="/bonuses">
              Bonus regulares
            </Link>
            <Link className="navbar-item navbar-item__responsive" to="/bonuses-free-play">
              Free plays
            </Link>
            <Link className="navbar-item navbar-item__responsive" to="/bonuses-vip">
              Vip especiales
            </Link>
          </div>
        </div>
        <Link className="navbar-item" to="/lines">
          Eventos
        </Link>
        <div className="navbar-item has-dropdown is-hoverable">
          <span className="navbar-link">
            Sportsbook
          </span>
          <div className="navbar-dropdown is-boxed">
            <Link className="navbar-item navbar-item__responsive" to="/info">
              Infomación
            </Link>
            <Link className="navbar-item navbar-item__responsive" to="/sports-rules">
              Reglas deportivas
            </Link>
            <Link className="navbar-item navbar-item__responsive" to="/house-rules">
              Reglas de la casa
            </Link>
            <Link className="navbar-item navbar-item__responsive" to="/sports-predictions">
              Tipos de pronósticos
            </Link>
          </div>
        </div>
        <div className="navbar-item has-dropdown is-hoverable">
          <Link className="navbar-link" to="/bets">
            Pronósticos
          </Link>
          <div className="navbar-dropdown is-boxed">
            <Link className="navbar-item navbar-item__responsive" to="/bets#racebook">
              Racebook
            </Link>
            <Link className="navbar-item navbar-item__responsive" to="/bets#casinoVirtual">
              Casino virtual
            </Link>
            <Link className="navbar-item navbar-item__responsive" to="/bets#casinoVivo">
              Casino en vivo
            </Link>
            <Link className="navbar-item navbar-item__responsive" to="/bets#pronosticosVivo">
              Pronósticos en vivo
            </Link>
          </div>
        </div>
        <p className="navbar-item" data-target="modal">
         Pagos
        </p>
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
