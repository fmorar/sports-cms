import React from 'react'
import Link from 'gatsby-link'

                          
const Footer = () => (
  <footer>
    <div className="container">
      <div className="sitemap">    
        <div className="sitemap__block">
          <h4>Information</h4>
          <ul className="sitemap--menu">
            <li className="sitemap--menu__item">
              <Link to="/about">
                Sobre Nosotros
              </Link>
            </li>
            <li className="sitemap--menu__item">
              <p>Programa de lealtad</p>
            </li>
            <li className="sitemap--menu__item">
              <Link to="/dictionary">Diccionario</Link>
            </li>
            <li className="sitemap--menu__item">
              <Link to="faq">FAQ</Link>
            </li>
          </ul>
        </div>
        <div className="sitemap__block">
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
        <div className="sitemap__block">
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
        <div className="sitemap__block">
          <h4>Siguenos</h4>
          <ul className="sitemap--menu">
            <li className="sitemap--menu__item">
              <a href="https://www.facebook.com/VIP-Sportsbook-324249738142521/" target="_blank">Facebook</a>
            </li>
            <li className="sitemap--menu__item">
              <a href="https://twitter.com/sportsbook_vip" target="_blank">Twitter</a>
            </li>
            <li className="sitemap--menu__item">
              <a href="https://plus.google.com/100592726028631080773" target="_blank">Google plus</a>
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
