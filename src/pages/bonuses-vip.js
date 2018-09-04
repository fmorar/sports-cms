import React from 'react'
import Link from 'gatsby-link'
import BonusesCta from '../components/BonusesCta'

export default class BonusesVip extends React.Component {
  render() {
    return (
		<div className="bonuses-page">
			<div className="bonuses--hero">
				<h2 className="section-title title title__main is-size-3 has-text-weight-bold is-bold-light text-center">Bonus VIP</h2>
			</div>
			<div className="section">
				<div className="container">
					<div className="content">
						<nav className="breadcrumb" aria-label="breadcrumbs">
						  <ul>
						    <li><Link to="/">Inicio</Link></li>
						    <li><Link to="/bonuses">bonus</Link></li>
						    <li className="is-active"><a href="#" aria-current="page"> Bonus VIP</a></li>
						  </ul>
						</nav>
						<div className="columns is-multiline">
							<div className="column is-6">
								<div className="card">
								  <div className="card-content vip-bonuses">
								    <div className="columns">
								    	<div className="column">
												<h2 className="title">Momio</h2>
												<p>Ofrece a todos nuestros clientes nuestros sin <strong>juice</strong> (momio) todos los días a discreción de nuestros managers.</p>
												<p>Reglas</p>
												<ul>
													<li>Califica para: NFL, NBA, NCAAF Y NCAAB.</li>
													<li>Accesible en internet y por teléfono.</li>
												</ul>
								        <Link className="button is-rounded mt-5 is-fullwidth vip-bonuses-btn" to="/register">
								         Obtener
								        </Link>
								    	</div>
								    </div>
								  </div>
								</div>
							</div>
							<div className="column is-6">
								<div className="card">
								  <div className="card-content">
								    <div className="content">
									    <div className="columns">
												<div className="column">
													<h2 className="title">Movimiento de línea</h2>
													<p>De igual manera nuestros clientes podrán seleccionar nuestro movimiento de línea especial que consiste en que el cliente tendrá la opción de mover medio punto en un mínimo de 10 apuestas en una sola llamada.</p>
													<p>Reglas</p>
													<ul>
														<li>
															La primera jugada define el máximo y el mínimo de las siguientes apuestas.
															<p>
																<strong>Ejemplo</strong>
																<br/>
																Primera Juagada, juegas $110
																<br/>
																Lakers -2 = $110 para $100, 
																<br/>
																Pronostico Máximo, será de $220
																<br/>
																Thunder -4.5 = $220 para $200
																<br/>
																Pronostico mínimo, será de $55
																<br/>
																Bulls +5 = $55 para $50
															</p>
														</li>
														<li>Seleccionar un mínimo de 10 equipos</li>
														<li>Califica para: NFL, NBA, NCAAFB, NCAA BASQUETBOL</li>
														<li>Jugada máxima $500</li>
														<li>Solo por teléfono</li>
														<li>Jugada mínima será la mitad de la primer apuesta</li>
													</ul>
													<Link className="button is-rounded mt-5 is-fullwidth" to="/register">
									         Obtener
									        </Link>
												</div>
									    </div>
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