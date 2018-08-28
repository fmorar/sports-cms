import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import SubNavbar from '../components/SubNavbar'
import Footer from '../components/Footer'
import './scss/main.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Vipsportbook | beats | casinos | sports and more" />
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
