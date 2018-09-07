import React from 'react'
import Link from 'gatsby-link'
import BonusesCta from '../components/BonusesCta'

export default class BonusesCrypto extends React.Component {

  state = { show: false }

  showModal = () => {
    this.setState({ show: true });
  }
  
  hideModal = () => {
    this.setState({ show: false });
  }

  render() {
    return (
		<div className="bonuses-page">
			<div className="bonuses--hero">
				<h2 className="section-title title title__main is-size-3 has-text-weight-bold is-bold-light text-center">Bonus Crypto</h2>
			</div>
			<div className="section">
				<div className="container">
					<nav className="breadcrumb" aria-label="breadcrumbs">
					  <ul>
					    <li><Link to="/">Inicio</Link></li>
					    <li><Link to="/bonuses">bonus</Link></li>
					    <li className="is-active"><a href="#" aria-current="page"> bonus de crypto</a></li>
					  </ul>
					</nav>
					<div className="content">
						<div className="columns is-multiline">
							<div className="column is-12">
								<div className="card">
								  <div className="card-content">
								    <div className="columns">
							  			<p className="column is-marginless">100% de bonus</p>
							  			<p className="column is-marginless is-1 is-hidden-mobile">|</p>
							  			<p className="column is-marginless">$50.00 - $1000.00</p>
							  			<p className="column is-marginless is-1 is-hidden-mobile">|</p>
							  			<p className="column is-marginless">12x - Rollover</p>
						        	<button type='button' className="button is-rounded mt-5" onClick={this.showModal}>Obtener</button>
								    </div>
								  </div>
								</div>
							</div>
							<div className="column is-12">
								<div className="card">
								  <div className="card-content">
								    <div className="content">
									    <div className="columns">
								  			<p className="column is-marginless">75% de bonus</p>
								  			<p className="column is-marginless is-1 is-hidden-mobile">|</p>
								  			<p className="column is-marginless">$50.00 - $1000.00</p>
								  			<p className="column is-marginless is-1 is-hidden-mobile">|</p>
								  			<p className="column is-marginless">9x - Rollover</p>
												<button type='button' className="button is-rounded mt-5" onClick={this.showModal}>Obtener</button>
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
								  			<p className="column is-marginless">50% de bonus</p>
								  			<p className="column is-marginless is-1 is-hidden-mobile">|</p>
								  			<p className="column is-marginless">$50.00 - $1000.00</p>
								  			<p className="column is-marginless is-1 is-hidden-mobile">|</p>
								  			<p className="column is-marginless">9x - Rollover</p>
												<button type='button' className="button is-rounded mt-5" onClick={this.showModal}>Obtener</button>
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
								  			<p className="column is-marginless">50% de bonus</p>
								  			<p className="column is-marginless is-1 is-hidden-mobile">|</p>
								  			<p className="column is-marginless">$50.00 - $1000.00</p>
								  			<p className="column is-marginless is-1 is-hidden-mobile">|</p>
								  			<p className="column is-marginless">6x - Rollover</p>
												<button type='button' className="button is-rounded mt-5" onClick={this.showModal}>Obtener</button>
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
								  			<p className="column is-marginless">25% de bonus</p>
								  			<p className="column is-marginless is-1 is-hidden-mobile">|</p>
								  			<p className="column is-marginless">$50.00 - $1000.00</p>
								  			<p className="column is-marginless is-1 is-hidden-mobile">|</p>
								  			<p className="column is-marginless">3x - Rollover</p>
												<button type='button' className="button is-rounded mt-5" onClick={this.showModal}>Obtener</button>
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
												Aplica únicamente para los depósitos que se realicen con bitcoins. 
											</p>
											<p>
												Se deben obtener los bonos al momento de hacer el depósito y antes de ingresar la apuesta. Cualquier excepción aplica únicamente bajo la discreción y aprobación de la Administración.
											</p>
											<p>
												Esta promoción aplica únicamente para jugadores recreativos. 
											</p>
											<p>
												Es válida una única promoción por depósito.
											</p>
											<p>
												Válida únicamente para los residentes de América o en lugares en donde sean autorizados por la Administración.
											</p>
											<p>
												La promoción puede ser combinada con otras promociones a discreción de la administración.
											</p>
											<p>
												El re-uso (rollover) se basa en los depósitos + Tarifas de transferencia si las hay + Las ganancias de las jugadas gratis.
											</p>
											<p>
												Esta promoción tiene una retención de dos semanas. 
											</p>
											<p>
												En el Casino y las Carreras de Caballos no contarán para el re-uso de las jugadas. 
											</p>
											<p>
												Los créditos promocionales no utilizados caducarán después de un periodo de 90 días. 
											</p>
											<p>
												Los retiros recientes deben reponerse antes de ser elegible para una bonificación. 
											</p>
											<p>
												La administración se reserva el derecho de anular o revocar las bonificaciones a su discreción. 
											</p>
											<p>
												El bonus máximo otorgado es de $1000.
											</p>
											<p>	
												Los Bonos se dan para incentivar a los jugadores y aumentar sus oportunidades de ganar. El aceptar un bono es opcional y al hacerlo, el jugador se da por entendido y acoge las condiciones y Reglas Generales de Bono, comprometiéndose así a jugar el monto especificado antes de solicitar un retiro. El usuario tiene la opción no solicitar el bono.
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
      <Modal show={this.state.show} handleClose={this.hideModal} >
				<div className="columns">
					<div className="column">
						<div className="content">
							<h4 className="text-center">Bitcoins</h4>
						</div>
					</div>
					<div className="column">
						<div className="content">
							<h4 className="text-center">Monero</h4>
						</div>
					</div>
				</div>
      </Modal>
		</div>
    )
  }
}

const Modal = ({ handleClose, show, children }) => {
const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  return (
		<div className={showHideClassName}>
		  <div className="modal-background"></div>
		  <div className="modal-card">
		    <header className="modal-card-head">
		      <p className="modal-card-title text-center">Metodos de pago</p>
		      <button className="delete" aria-label="close" onClick={handleClose}></button>
		    </header>
		    <section className="modal-card-body">
		      {children}
		    </section>
		  </div>
		</div>
  );
};