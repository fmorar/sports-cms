import React from 'react'
import Link from 'gatsby-link'

export default class BonusesReload extends React.Component {
  render() {
    return (
		<div className="bonuses-page">
			<div className="bonuses--hero">
				<h2 className="section-title title title__main is-size-3 has-text-weight-bold is-bold-light text-center">Bonus Reload</h2>
			</div>
			<div className="section">
				<div className="container">
					<div className="content">
						<div className="columns is-multiline">
							<div className="column is-12">
								<div className="card">
								  <div className="card-content">
								    <div className="columns">
							  			<p className="column is-marginless">100% Bono en efectivo</p>
							  			<p className="column is-marginless is-1 is-hidden-mobile">|</p>
							  			<p className="column is-marginless">$50.00 - $1000.00</p>
							  			<p className="column is-marginless is-1 is-hidden-mobile">|</p>
							  			<p className="column is-marginless">18x - Rollover</p>
							        <Link className="button is-rounded mt-5" to="/register">
							         Obtener
							        </Link>
								    </div>
								  </div>
								</div>
							</div>
							<div className="column is-12">
								<div className="card">
								  <div className="card-content">
								    <div className="content">
									    <div className="columns">
								  			<p className="column is-marginless">75% Bono en efectivo</p>
								  			<p className="column is-marginless is-1 is-hidden-mobile">|</p>
								  			<p className="column is-marginless">$50.00 - $1000.00</p>
								  			<p className="column is-marginless is-1 is-hidden-mobile">|</p>
								  			<p className="column is-marginless">14x - Rollover</p>
								        <Link className="button is-rounded mt-5" to="/register">
								         Obtener
								        </Link>
									    </div>
								    </div>
								  </div>
								</div>
							</div>
							<div className="column is-12">
								<div className="card">
								  <div className="card-content">
								    <div className="content">
									    <div className="columns">
								  			<p className="column is-marginless">50% Bono en efectivo</p>
								  			<p className="column is-marginless is-1 is-hidden-mobile">|</p>
								  			<p className="column is-marginless">$50.00 - $1000.00</p>
								  			<p className="column is-marginless is-1 is-hidden-mobile">|</p>
								  			<p className="column is-marginless">10x - Rollover</p>
								        <Link className="button is-rounded mt-5" to="/register">
								         Obtener
								        </Link>
									    </div>
								    </div>
								  </div>
								</div>
							</div>
							<div className="column is-12">
								<div className="card">
								  <div className="card-content">
								    <div className="content">
								    	<h3>Términos y condiciones</h3>
							    		<p>
											Los Bonos se dan para incentivar a los jugadores y aumentar sus oportunidades de ganar. El aceptar un bono es opcional y al hacerlo, el jugador se da por entendido y acoge las condiciones y Reglas Generales de Bono, comprometiéndose así a jugar el monto especificado antes de solicitar un retiro. El usuario tiene la opción de declinar el bono.
										</p>
								    </div>
								  </div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
  }
}