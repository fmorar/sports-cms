import React from 'react'
import Link from 'gatsby-link'
import BonusesCta from '../components/BonusesCta'

export default class BonusesEfectivo extends React.Component {
  render() {
    return (
		<div className="bonuses-page">
			<div className="bonuses--hero">
				<h2 className="section-title title title__main is-size-3 has-text-weight-bold is-bold-light text-center">Bonus en efectivo</h2>
			</div>
			<div className="section">
				<div className="container">
					<div className="content">
						<nav className="breadcrumb" aria-label="breadcrumbs">
						  <ul>
						    <li><Link to="/">Inicio</Link></li>
						    <li><Link to="/bonuses">bonus</Link></li>
						    <li className="is-active"><a href="#" aria-current="page"> bonus en efectivo</a></li>
						  </ul>
						</nav>
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
									    <div className="columns">
								  			<p className="column is-marginless">25% Bono en efectivo</p>
								  			<p className="column is-marginless is-1 is-hidden-mobile">|</p>
								  			<p className="column is-marginless">$50.00 - $1000.00</p>
								  			<p className="column is-marginless is-1 is-hidden-mobile">|</p>
								  			<p className="column is-marginless">6x - Rollover</p>
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
											Esta promoción aplica únicamente para jugadores recreativos.
											Solo es válida una única promoción por depósito.
											Válida únicamente para los residentes de América o en lugares en donde sean autorizados por la Administración.
										</p>

										<p>
											La promocion estara disponible para los clientes en las líneas de juego regulares, con el 'juice' (ganancia) predeterminado para cada una de ellas.
											Aplica únicamente para los depósitos que se realicen con bitcoins.
											Se deben canjear los bonos al momento de hacer el depósito y antes de ingresar la apuesta.
										</p>

										<p>	
											El re-uso (rollover) se basa en los depósitos + Tarifas de transferencia si las hay + Las ganancias de las jugadas gratis.
										</p>

										<p>
											Esta promoción tiene una retención de dos semanas.
											En el Casino (Acción) y las Carreras de Caballos (Acción) no contarán para el re-uso de las jugadas.
										</p>

										<p>
											Aplica unicamente para depósitos regulares y Bitcoins.
											Todos los bonos deben ser reclamados (canjeados) al momento de realizar el depósito y después de ingresar cualquier apuesta. Cualquier excepción aplica únicamente bajo la discreción y aprobación de la Administración.
										</p>

										<p>
											Los créditos promocionales no utilizados caducarán después de un periodo de 90 días.
											Los retiros recientes deben reponerse antes de la elegibilidad de la bonificación.
											La administración se reserva el derecho de anular o revocar las bonificaciones a su discreción.
										</p>

										<p>
											Cualquier bonificación aplicable debe reclamarse al momento del depósito y antes de hacer uso del dinero depositado. Si no se reclama el bono en este momento, se perderá.
										</p>
								    </div>
								  </div>
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