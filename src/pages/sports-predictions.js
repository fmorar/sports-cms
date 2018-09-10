import React from 'react'
import Link from 'gatsby-link'
import BonusesCta from '../components/BonusesCta'


export default class SportPredictions extends React.Component {
  render() {
    return (
		<div className="bonuses-page">
			<div className="bonuses--hero section-title">
				<h2 className="title title__main is-size-3 has-text-weight-bold is-bold-light text-center">Tipos de pronósticos</h2>
			</div>
			<div className="section">
				<div className="container">
					<div className="columns">
						<div className="column">
							<div className="content">
								<h2>Directa</h2>
								<p>
									Las apuestas directas son la forma más sencilla de jugar, no se complican puntos, o Hándicap o ningún tipo de herramienta complicada. En Fútbol / Soccer, suele darse la opción de jugar también al empate, por lo que las opciones serían: Equipo Visita, Equipo Local y Empate. Otras opciones de deportes como por ejemplo el baloncesto o el fútbol americano, solamente se tienen que escoger al ganador del juego. Este estilo de pronósticos se conoce generalmente en el idioma inglés como "Money Line Bet".
								</p>
								<p>
									<strong>Ejemplo en Fútbol (3 opciones):</strong>
									<br/>
									Las palmas +600 en estilo americano
									<br/>
									Real Madrid -167 en estilo americano
									<br/>
									Empate +200 en estilo americano
									<br/>
									Si usted juega en Las palmas, juega 100 para ganar 600
									<br/>
									Si usted juega en Real Madrid, juega 167 para ganar 100
									<br/>
									Si usted juega el empate, 100 para 200.
								</p>
								<h2>Combinada / Parlay </h2>
								<p>
									También conocida como parlay, es básicamente una selección de más de 2 equipos, sin ningún orden en particular.
									<br/>
									Todas las selecciones que se hicieron deben de ganar. Entre más selecciones sean elegidas, mayor será el monto a ganar. 
									<br/>
									Dicho monto se calcula utilizando una fórmula matemática usando las cuotas/precios de cada una de las selecciones.
								</p>
								<p>
									<strong>Ejemplo: Combinada de 3 equipos:</strong>
									Las Palmas +600 en estilo americano
									<br/>
									olympique lyonnais +300 en estilo americano
									<br/>
									Inter Milano 181 en estilo americano
									<br/>
									Para 3 selecciones, en caso de que haya un empate o se cancele alguna de las selecciones, la jugada pasa a ser una jugada combinada 2 equipos (siguiente nivel inferior), excepto en una jugada combinada de 2 selecciones en la que se pasa a una jugada directa.
								</p>
								<h2>Teaser</h2>
								<p>
									Lo que se hace es combinar de 2 a 7 selecciones de estilo Hándicap, ya sea de baloncesto o fútbol americano. 
									<br/>
									A estas selecciones elegidas, se les ajustará la línea en favor del cliente, el cual puede escoger del menú de Teaser sobre cuántos puntos quiere tener a favor y cuantas selecciones tendrá la jugada. 
									<br/>
									En los teasers solamente son aceptados pronósticos a juego, no se venden teasers con los totales o a más o a menos.
									<br/>
									En un Teaser, todas las selecciones individuales deberán ser ganadoras para que el pronóstico total resulte ganador.
								</p>
								<p>
									<strong>Ejemplo: Teaser de equipos con 5 puntos</strong>
									<br/>
									Lakers +4, +5 pts = línea en Teaser +9
									<br/>
									Knicks -3, +5 pts = línea en Teaser +2
									<br/>
									El precio de un Teaser varía dependiendo del número de puntos y el deporte al que pertenecen las selecciones.
									<br/>
									Un empate en cualquiera de las selecciones convierte toda la jugada en un empate.
								</p>
								<h2>Condicionada</h2>
								<p>En la apuesta condicionada se eligen dos jugadas, en la cual la segunda jugada pasa a ser la apuesta solamente condicionada por un estatuto específico.</p>
								<p>
									<strong>Ejemplos:</strong>
									Jugada #1, Dallas Cowboys -5 100 para 9
									<br/>
									Condición Si gana, empata o se cancela
									<br/>
									Jugada #2, Carolina Panthers +4 100 para 91
									<br/>
									Si la primera selección pierde, el pronóstico termina. El resultado sería una pérdida de 100.
									<br/>
									Si la primera selección gana, el pronóstico continúa con la jugada #2. El resultado parcial sería de una ganancia de 91, quedando a la espera del resultado de la jugada #2.
									<br/>
									Si la segunda selección gana, el resultado final de la jugada sería de una ganancia de 182
									<br/>
									Si la segunda selección pierde, el resultado final sería una pérdida de 9.
								</p>
								<h2>Puntos de Acción</h2>
								<p>
									Únicamente están habilitados para el fútbol americano y el baloncesto.
									<br/>
								 	Los puntos de acción son un tipo específico de pronósticos para jugadores que; no solamente predicen qué equipo saldrá vencedor en el juego, sino la cantidad de puntos por los que derrotará al otro equipo.
								 	<br/>
								 	Estos pronósticos increíblemente exactos con puntos de acción tienen un mínimo de un (1) punto hasta un máximo de diez (10) puntos, y el monto arriesgado no puede ser superior a su saldo disponible.
								 	<br/>
								 	En este tipo de pronóstico, se deberá poner en juego $110 para ganar $100.
								</p>
								<p>
									<strong>Ejemplos:</strong>
									Atlanta Hawks +191
									<br/>
									Houston Rockets -5
									<br/>
									Suponga que usted juega $100 por punto en los Houston Rockets y pide el tope de 10 puntos. Houston deberá ganar por al menos 5 puntos, y por cada punto adicional anotado por los Houston Rockets después de los 5 indicados en el Handicap podrá ganar $100. Tendrás la oportunidad de ganar entre $ 100 y $ 1000.
									<br/>
									Si Houston gana por 9 puntos, su ganancia neta sería de $ 400. Por otro lado, si Houston no logra cubrir el handicap, corre el riesgo de $ 110 por cada punto que no cubra los 5 indicados en la línea del handicap. Los puntos de acción también pueden ser utilizados en los totales, ya sea over o under, así como en el equipo no favorito, consiguiendo 5 puntos.
									<br/>
									Los puntos de acción sólo podrán ser utilizados en las líneas hándicap y los totales.
								</p>
								<h2>Apuestas Abiertas</h2>
								<p>
									Las apuestas abiertas son un tipo de juego que permiten a los jugadores realizar una apuesta combinada y al mismo tiempo completar las selecciones en distintos tiempos, inclusive tiene la oportunidad de completar selecciones en rangos de distintos días.
								</p>
								<p>
									<strong>Ejemplos:</strong>
									<br/>
									Cowboys -8
									<br/>
									Dolphins -14
									<br/>
									ABIERTA*
									<br/>
									No hay apuestas abiertas en teasers.
									<br/>
									Apuestas combinadas abiertas solamente en línea.
									<br/>
									Máximo de 2 puestos abiertos por combinada.
									<br/>
									Cualquier apuesta abierta sin llenar/pendiente por más de 90 días será clasificada como perdedora.
									<br/>
									Todas las apuestas son finales. Una vez llenado un puesto abierto, la selección no se puede modificar.
								</p>
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