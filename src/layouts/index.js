import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import favicon from '../img/favicon.png';
import Navbar from '../components/Navbar'
import SubNavbar from '../components/SubNavbar'
import Footer from '../components/Footer'
import './scss/main.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet 
      title="Vipsportbook | pronósticos | casinos | deportes"
      meta={[
          { name: 'description', content: 'Nuestro proyecto VIP Sportsbook, fue creado pensando en brindar beneficios a los jugadores y afiliados, mediante una plataforma diseñada para los amantes de los deportes y por supuesto los pronósticos deportivos.' },
          { name: 'keywords', content: 'gambling online, vip sportbook, pronósticos deportivos, Apuestas deportivas, Bonus de bienvenida, Bonos de bienvenida' },
      ]} 
      link={[
        { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
      ]}
    />
    <header className="main-header">
    	<SubNavbar/>
    	<Navbar />
    </header>
    <div>
    	{children()}
    </div>
    <Footer/>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
