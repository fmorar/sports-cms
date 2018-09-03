import React from 'react'
import Link from 'gatsby-link'
import BonusesCta from '../components/BonusesCta'

export default class SportsRules extends React.Component {
  render() {
    return (
		<div className="sports-rules-page"> 
			<div className="sports-rules--hero">
				<h2 className="section-title title title__main is-size-3 has-text-weight-bold is-bold-light text-center">Reglas deportivas</h2>
			</div>
			<div className="section">
				<div className="container">
				<div className="columns">
					<div className="column is-3">
						<aside class="menu">
						  <p class="menu-label">
						    Reglas por deporte
						  </p>
						  <ul class="menu-list">
						    <li>
						      <a>Baseball</a>
						      <ul>
						        <li><a>Selección de Lanzadores</a></li>
						        <li><a>MLB - Jugadas Especiales (props) / SERIE (torneo de múltiples partidos)</a></li>
						        <li><a>Basbell Internacional y sus Reglas</a></li>
						      </ul>
						    </li>
						    <li>
						    	<a>BASKETBALL</a>
									<ul>
										<li><a>Tiempo de Juego Oficial</a></li>
										<li><a>Basquetbol Internacional</a></li>
									</ul>
						    </li>
						    <li>
						    	<a>BOXEO</a>
						    </li>
						    <li>
						    	<a>CRICKET</a>
						    </li>
						    <li>
						    	<a>FOOTBALL</a>
									<ul>
										<li><a>Tiempo de Juego Oficial</a></li>
										<li><a>Jugadas Especiales (PROPS) para Liga NFL</a></li>
									</ul>
						    </li>
						    <li>
						    	<a>GOLF</a>
						    </li>
						    <li>
						    	<a>HOCKEY</a>
						    </li>
						    <li>
						    	<a>MMA</a>
						    </li>
						    <li>
						    	<a>REGLAS GENERALES DE CARRERAS</a>
						    </li>
						    <li>
						    	<a>RUGBY</a>
						    </li>
						    <li>
						    	<a>FÚTBOL</a>
						    	<ul>
										<li>Tipos de apuestas de fútbol</li>
						    	</ul>
						    </li>
						    <li>
									<a>TENIS</a>
						    </li>
						  </ul>


						</aside>
					</div>
					<div className="column">
						
					</div>
				</div>
				</div>
			</div>
			<BonusesCta/>
		</div>
    )
  }
}