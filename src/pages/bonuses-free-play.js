import React from 'react'
import Link from 'gatsby-link'
import BonusesCta from '../components/BonusesCta'

export default class BonusesFreePlay extends React.Component {
  render() {
    return (
		<div className="bonuses-page">
			<div className="bonuses--hero">
				<h2 className="section-title title title__main is-size-3 has-text-weight-bold is-bold-light text-center">Bonus free play</h2>
			</div>
			<div className="section">
				<div className="container">
					<nav className="breadcrumb" aria-label="breadcrumbs">
					  <ul>
					    <li><Link to="/">Inicio</Link></li>
					    <li><Link to="/bonuses">bonus</Link></li>
					    <li className="is-active"><a href="#" aria-current="page"> bonus free play</a></li>
					  </ul>
					</nav>
					<div className="content">
						<div className="columns is-multiline">
							<div className="column is-12">
								<div className="card">
								  <div className="card-content">
								    <div className="columns">
							  			<p className="column is-marginless">100% Bono en efectivo</p>
							  			<p className="column is-marginless is-1 is-hidden-mobile">|</p>
							  			<p className="column is-marginless">$50.00 - $500.00</p>
							  			<p className="column is-marginless is-1 is-hidden-mobile">|</p>
							  			<p className="column is-marginless">12x - Rollover</p>
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
								  			<p className="column is-marginless">$50.00 - $500.00</p>
								  			<p className="column is-marginless is-1 is-hidden-mobile">|</p>
								  			<p className="column is-marginless">8x - Rollover</p>
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
								  			<p className="column is-marginless">$50.00 - $500.00</p>
								  			<p className="column is-marginless is-1 is-hidden-mobile">|</p>
								  			<p className="column is-marginless">5x - Rollover</p>
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
											El número de cuenta de referencia debe ser proporcionado al momento de la inscripción.
											Se requerirá una identificación válida.
											Las cuentas referidas deben ser cuentas nuevas, las cuentas duplicadas o existentes no califican.
										</p>

										<p>
											Solo se permite una cuenta válida por hogar y dirección IP.
											Nuestra Administración tiene el derecho de denegar cualquier Bonificación de referencia en los casos que lo consideren necesario.
										</p>

										<p>	
											Las cuentas referidas deben hacer un depósito inicial de al menos $ 200.
											La bonificación por recomendación requiere una reinversión de 5 veces de las ganancias de la jugada gratis antes de que se pueda procesar cualquier retiro; de lo contrario, el cliente perderá los bonos y ganancias provenientes de esta promoción.
											Promoción válida para América del Norte, América del Sur, América Central o previa aprobación.
										</p>

										<p>
											La cuenta de referencia debe contactarnos 5 días después de que la cuenta referida haya realizado el depósito inicial.
										</p>

										<p>
											La cuenta de referencia debe estar activa al menos 2 semanas antes del nuevo registro.
											La cuenta de referencia no debe tener pagos en los últimos 30 días.
											Se aplica solo al 10% de las líneas con juice (comisión/ganancia)
										</p>

										<p>
											El bono de recomendación máximo otorgado es de $ 375
											La acción de Casino y Carreras de caballos no cuentan para la renovación.
										</p>

										<p>
											* Se pueden aplicar restricciones adicionales para esta promoción. *
											Los créditos promocionales no utilizados caducarán y serán revocados después de un período de 90 días.
										</p>

										<p>
											Los retiros recientes deben reponerse antes de la elegibilidad de bonificación.
											La administración se reserva el derecho de anular o revocar las bonificaciones a su discreción.
										</p>

										<p>
											Cualquier bonificación aplicable debe reclamarse al momento del depósito y antes de hacer uso del dinero depositado. Si no se reclama el bono en este momento, se perderá.
											Por favor, revise los términos y condiciones.
											Para obtener más información, póngase en contacto con nuestras ventas
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