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
              About us</Link>
            </li>
            <li className="sitemap--menu__item">
              <Link to="/">Affiliates</Link>
            </li>
            <li className="sitemap--menu__item">
              <Link to="/">Partner login</Link>
            </li>
            <li className="sitemap--menu__item">
              <Link to="/">Betting With Bitcoin</Link>
            </li>
          </ul>
        </div>
        <div className="sitemap__block column">
          <h4>Beatting</h4>
          <ul className="sitemap--menu">
            <li className="sitemap--menu__item">
              <Link to="/">Sportsbook</Link>
            </li>
            <li className="sitemap--menu__item">
              <Link to="/">Live Casino</Link>
            </li>
            <li className="sitemap--menu__item">
              <Link to="/">Virtual Casino</Link>
            </li>
            <li className="sitemap--menu__item">
              <Link to="/">Racebook</Link>
            </li>
          </ul>
        </div>
        <div className="sitemap__block column">
          <h4>Help</h4>
          <ul className="sitemap--menu">
            <li className="sitemap--menu__item">
              <Link to="/">Banking</Link>
            </li>
            <li className="sitemap--menu__item">
              <Link to="/">Contact Us</Link>
            </li>
            <li className="sitemap--menu__item">
              <Link to="/">Privacy Policy</Link>
            </li>
            <li className="sitemap--menu__item">
              <Link to="/">General Rules</Link>
            </li>
          </ul>
        </div>
        <div className="sitemap__block column">
          <h4>Social</h4>
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
