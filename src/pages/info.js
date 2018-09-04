import React from 'react'
import Link from 'gatsby-link'
import BonusesCta from '../components/BonusesCta'
import Infoimg from '../img/info.jpg'


export default class Info extends React.Component {
  render() {
    return (
		<div className="bonuses-page">
			<div className="bonuses--hero">
				<h2 className="section-title title title__main is-size-3 has-text-weight-bold is-bold-light text-center">Información general</h2>
			</div>
			<div className="section">
				<div className="container">
					<div className="columns">
						<div className="column is-hidden-mobile">
							<img src={Infoimg} alt=""/>
						</div>
						<div className="column">
							<h2 className="title">Información general</h2>
							<p>Nos complace darles la bienvenida a VIP SPORTSBOOK su plataforma de entretenimiento de pronósticos deportivos. ¡Tendrás la oportunidad de jugar en diferentes ligas como NFL, MLB, NBA, NHL, SOCCER, BOXEO, CARRERAS, MMA Y MUCHO MÁS!</p>
							<br/>
							<p>Nos comprometemos a llevarles la mayor cantidad de eventos posibles alrededor del mundo con una gran variedad de tipos de pronósticos deportivos. De igual manera les ofrece un casino digital y un casino en vivo para nuestros clientes más exigentes y no olvidemos nuestros pronósticos en vivo que corre en la mayoría de eventos que ofrecemos. </p>
							<br/>
							<p><strong>Todos nuestros clientes podrán utilizar nuestro sitio web o bien llamar a nuestro call center para ingresar cualquier pronóstico que desee.</strong></p>
						</div>
					</div>
					<div className="columns">
						<div className="column">
							<div className="card card-info">
							  <div className="card-content">
							    <p className="title">
										Limites de depósito							    
									</p>
									<ul>
										<li>Deposito Mínimo - $100</li>
										<li>Máximo Deposito - $10,000</li>
									</ul>
							  </div>
							</div>
						</div>
						<div className="column">
							<div className="card card-info">
							  <div className="card-content">
							    <p className="title">
										Limites de pronósticos en línea							    
									</p>
									<ul>
										<li>Mínimo de Pronostico - $10</li>
										<li>Máximo de Pronostico - $1000</li>
										<li>Apuesta mínima en Parlays  Teasers y Futuros =  $10</li>
										<li>Apuesta máxima de Parlays y Teasers = $300</li>
										<li>Futuros máxima = $500</li>
									</ul>
							  </div>
							</div>
						</div>
						<div className="column">
							<div className="card card-info">
							  <div className="card-content">
							    <p className="title">
										Limites de pronósticos por teléfonos			    
									</p>
									<ul>
										<li>Mínimo de Pronostico - $25</li>
										<li>Máximo de Pronostico - $1000</li>
										<li>Apuesta mínima en Parlays  Teasers y Futuros =  $50</li>
										<li>Apuesta máxima de Parlays y Teasers = $300</li>
										<li>Futuros máxima = $500</li>
									</ul>
							  </div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<BonusesCta/>
		</div>
    )
  }
}