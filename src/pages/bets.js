import React from 'react'
import Link from 'gatsby-link'
import casinoOnline from '../img/casino-online.jpg'
import BonusesCta from '../components/BonusesCta'

export default class Bets extends React.Component {
  render() {
    return (
		<div className="bets-page"> 
			<div className="bets--hero">
				<h2 className="section-title title title__main is-size-3 has-text-weight-bold is-bold-light text-center">Apuestas</h2>
			</div>
			<div className="section">
				<div className="container">
					<div className="columns is-multiline">
						<div className="column is-12">
							<div id="racebook" className="card card__bet">
							  <div className="card-content">
							    <div className="content">
								    <div className="columns">
											<div className="column is-3">
												<img className="image" src={casinoOnline} alt=""/>
											</div>
											<div className="column">
												<h3>Racebook</h3>
												<p className="text">
									    		Seamos honestos, cuando pensamos en las carreras de caballos o galgos, es muy probable que te venga a la mente la emoción, adrenalina y velocidad. Disfrutar de estas carreras es una de las mayores emociones, entonces… ¿Por qué no hacer algo de dinero mientras se disfruta este deporte? En nuestra plataforma de apuestas en carreras, podrás encontrar TODOS los eventos más importantes del mundo, en cuanto a carreras de caballos y galgos, en más de 130 pistas a escoger. 
												</p>
												<Link to="/sing-up" class="button is-rounded">Play now!</Link>
											</div>
								    </div>
							    </div>
							  </div>
							</div>
						</div>
						<div className="column is-12">
							<div id="casinoVirtual" className="card card__bet">
							  <div className="card-content">
							    <div className="content">
								    <div className="columns">
											<div className="column is-3">
												<img className="image" src={casinoOnline} alt=""/>
											</div>
											<div className="column">
												<h3>Casino Virtual</h3>
										    <p>
													La emoción de entrar en un casino y sentir todas las posibilidades de llenar tus bolsillos mientras te diviertes, puede que sea uno de los sentimientos más satisfactorios. Si piensas en expertos en casino, somos nosotros. Es por eso que te traemos un espectacular servicio de casino virtual, donde podrá encontrar una gran variedad de juegos y entretenerse durante horas mientras hace mucho dinero. 
									    	</p>
												<Link to="/sing-up" class="button is-rounded">Play now!</Link>
											</div>
								    </div>
							    </div>
							  </div>
							</div>
						</div>
						<div className="column is-12">
							<div id="casinoVivo" className="card card__bet">
							  <div className="card-content">
							    <div className="content">
								    <div className="columns">
											<div className="column is-3">
												<img className="image" src={casinoOnline} alt=""/>
											</div>
											<div className="column">
												<h3>Casino en vivo</h3>
										    <p>
										    	Gracias a la tecnología moderna en cuanto a video, podemos traerte un casino completamente real y en vivo a tu pantalla. Literalmente estás a un clic de disfrutar de un lugar donde puedes mantener la emoción de un casino real desde tu casa. Lanza tus apuestas y observa cómo los resultados aparecen frente a ti en una interacción en tiempo real. Al igual que entrar en tu casino favorito, pero desde cualquier lugar del mundo. 
									    	</p>
												<Link to="/sing-up" class="button is-rounded">Play now!</Link>
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