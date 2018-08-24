import React from 'react'
import Link from 'gatsby-link'

                          
const Footer = () => (
  <footer>
    <div className="container">
      <div className="sitemap columns is-desktop">
        <div className="sitemap__block column">
          <h4>Information</h4>
          <ul className="sitemap--menu">
            <li className="sitemap--menu__item">About us</li>
            <li className="sitemap--menu__item">Affiliates</li>
            <li className="sitemap--menu__item">Partner login</li>
            <li className="sitemap--menu__item">Betting With Bitcoin </li>
          </ul>
        </div>
        <div className="sitemap__block column">
          <h4>Beatting</h4>
          <ul className="sitemap--menu">
            <li className="sitemap--menu__item">Sportsbook</li>
            <li className="sitemap--menu__item">Live Casino</li>
            <li className="sitemap--menu__item">Virtual Casino</li>
            <li className="sitemap--menu__item">Racebook</li>
          </ul>
        </div>
        <div className="sitemap__block column">
          <h4>Help</h4>
          <ul className="sitemap--menu">
            <li className="sitemap--menu__item">Banking</li>
            <li className="sitemap--menu__item">Contact Us</li>
            <li className="sitemap--menu__item">Privacy Policy</li>
            <li className="sitemap--menu__item">General Rules</li>
          </ul>
        </div>
        <div className="sitemap__block column">
          <h4>Social</h4>
          <ul className="sitemap--menu">
            <li className="sitemap--menu__item">Facebook</li>
            <li className="sitemap--menu__item">Twitter</li>
            <li className="sitemap--menu__item">Google plus</li>
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
