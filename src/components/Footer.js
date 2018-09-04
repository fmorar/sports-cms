import React from 'react'
import Link from 'gatsby-link'

                          
const Footer = () => (
  <footer>
    <div className="container">
      <div className="sitemap columns is-desktop">
        <div className="sitemap__block column">
          <h4>Information</h4>
          <ul className="sitemap--menu">
            <li className="sitemap--menu__item">
              <Link to="/about">
                Sobre Nosotros
              </Link>
            </li>
            <li className="sitemap--menu__item">
              <Link to="/">Noticias</Link>
            </li>
            <li className="sitemap--menu__item">
              <Link to="/dictionary">Diccionario</Link>
            </li>
            <li className="sitemap--menu__item">
              <Link to="faq">Faq</Link>
            </li>
          </ul>
        </div>
        <div className="sitemap__block column">
          <h4>Pronósticos</h4>
          <ul className="sitemap--menu">
            <li className="sitemap--menu__item">
              <Link to="/bets#pronosticosVivo">Pronósticos en vivo</Link>
            </li>
            <li className="sitemap--menu__item">
              <Link to="/bets#casinoVivo">Casino en vivo</Link>
            </li>
            <li className="sitemap--menu__item">
              <Link to="/bets#casinoVirtual">Casino virtual</Link>
            </li>
            <li className="sitemap--menu__item">
              <Link to="/bets#racebook">Racebook</Link>
            </li>
          </ul>
        </div>
        <div className="sitemap__block column">
          <h4>Ayuda</h4>
          <ul className="sitemap--menu">
            <li className="sitemap--menu__item">
              <Link to="/">Pagos</Link>
            </li>
            <li className="sitemap--menu__item">
              <Link to="/#contact">Contactenos</Link>
            </li>
            <li className="sitemap--menu__item">
              <Link to="/privacy-policy">Politicas de privacidad</Link>
            </li>
            <li className="sitemap--menu__item">
              <Link to="/house-rules">Reglas de la casa</Link>
            </li>
          </ul>
        </div>
        <div className="sitemap__block column">
          <h4>Siguenos</h4>
          <ul className="sitemap--menu">
            <li className="sitemap--menu__item">
              <Link to="/">Facebook</Link>
            </li>
            <li className="sitemap--menu__item">
              <Link to="/">Twitter</Link>
            </li>
            <li className="sitemap--menu__item">
              <Link to="/">Google plus</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="copyright text-center">
      <p>VIPSPORTBOOK {(new Date().getFullYear())} All Rights Reserved.</p>
    </div>
  </footer>
)
export default Footer
