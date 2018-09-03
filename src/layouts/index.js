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
      title="Vipsportbook | beats | casinos | sports and more"
      meta={[
          { name: 'description', content: '...' },
          { name: 'keywords', content: '....' },
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
