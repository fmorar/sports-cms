import React from 'react'
import Link from 'gatsby-link'
import BonusesCta from '../components/BonusesCta'
import AnchorLink from 'react-anchor-link-smooth-scroll'

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
						<aside className="menu">
						  <p className="menu-label">
						    Reglas por deporte
						  </p>
						  <ul className="menu-list">
						    <li>
						      <AnchorLink href='#baseball'>Baseball</AnchorLink >
						      <ul>
						        <li><a>Selección de Lanzadores</a></li>
						        <li><a>MLB - Jugadas Especiales (props) / SERIE (torneo de múltiples partidos)</a></li>
						        <li><a>Basbell Internacional y sus Reglas</a></li>
						      </ul>
						    </li>
						    <li>
						    	<AnchorLink href='#basketball'>Basketball</AnchorLink>
									<ul>
										<li><a>Tiempo de Juego Oficial</a></li>
										<li><a>Basketball Internacional</a></li>
									</ul>
						    </li>
						    <li>
						    	<AnchorLink href='#boxeo'>Boxeo</AnchorLink>
						    </li>
						    <li>
						    	<AnchorLink href="#cricket">Cricket</AnchorLink>
						    </li>
						    <li>
						    	<AnchorLink href="#futbol-americano">Fútbol Americano</AnchorLink>
									<ul>
										<li><a>Tiempo de Juego Oficial</a></li>
										<li><a>Jugadas Especiales (PROPS) para Liga NFL</a></li>
									</ul>
						    </li>
						    <li>
						    	<AnchorLink href="#golf">Golf</AnchorLink>
						    </li>
						    <li>
						    	<AnchorLink href="#hockey">Hockey</AnchorLink>
						    </li>
						    <li>
						    	<AnchorLink href="#mma">MMA</AnchorLink>
						    </li>
						    <li>
						    	<AnchorLink href="#rules-general-race">Reglas generales de carreras</AnchorLink>
						    </li>
						    <li>
						    	<AnchorLink href="#rugby">Rugby</AnchorLink>
						    </li>
						    <li>
						    	<AnchorLink href="#futbol">Fútbol</AnchorLink>
						    	<ul>
										<li>Tipos de apuestas de fútbol</li>
						    	</ul>
						    </li>
						    <li>
									<AnchorLink href="#tenis">Tenis</AnchorLink>
						    </li>
						  </ul>
						</aside>
					</div>
					<div className="column">
						<div className="content">
							<div class="content">
								<div id="baseball">
								  <h2>Baseball</h2>
								  <p>
										Ganadores y perdedores serán oficiales después de 5 entradas (‘innings’) de juego a menos que el equipo de casa esté ganando después de 4 ½ entradas. Si un juego es cancelado o aplazado el marcador de la última entrada completa será el ganador. Si el equipo de casa anota hasta un empate o toma el control en la primera parte de la entrada entonces en el momento en que el juego es llamado a concluir el marcador determinará al ganador. El dinero será devuelto si el equipo de casa empata el juego y luego se suspende el partido. Cuando se está jugando los totales de carreras (arriba/abajo) el juego tiene que llegar a 9 entradas (8 ½ si el equipo de casa está ganando), para que haya acción. Los pronósticos de carreras totales serán cancelados si hay un cambio de lanzador antes de que ambos lanzadores ya listados hayan hecho por lo menos un lanzamiento. Las reglas para los pronósticos de línea de carreras son las mismas que aquellas de totales.
								  </p>
								  <h3>Selección de Lanzadores</h3>
								  <p>
										Los pronósticos de béisbol serán aceptados en la siguiente manera:
										Acción
								  </p>
								  <ul>
								    <li>
								    	<strong>Acción: </strong>
								    	Equipo contra equipo, sin importar el primer lanzador. Los pronósticos de “acción” serán calculados por el precio del nuevo lanzador. Un lanzador es visto como lanzador principal después de ejecutar el primer lanzamiento.
								    </li>
								    <li>
								    	<strong>Un lanzador especificado: </strong>
								    	Un pronóstico por o en contra de un lanzador especificado, sin importar el lanzador principal.
								    </li>
								    <li>
								    	<strong>Ambos lanzadores especificados (listados): </strong>
								    	Si los lanzadores no son exactamente aquellos ya listados en el muestrario y/o su boleto, entonces el pronóstico se considerará "sin acción".
								    </li>
								  </ul>
								  <h3>MLB - Jugadas Especiales (props) / SERIE (torneo de múltiples partidos)</h3>
								  <p>
										Los pronósticos en las series se basan en los 3 PRIMEROS PARTIDOS JUGADOS de cada serie. Ninguno de los 2 equipos puede jugar con otro contrincante entre partidos ya programados. Si uno de los 3 partidos es aplazado, todos los pronósticos (acción) siguen válidos. Si se juegan menos de 3 partidos entonces el equipo con la ventaja es el ganador de la serie.
										Todo pronóstico está basado en acción (sin lanzadores listados).
								  </p>
								  <h4>MLB - Primer Tiempo</h4>
								  <p>
										Los pronósticos se basan en el marcador de las primeras 5 entradas completas. En caso que el juego no se haya completado después de 5 entradas completas, todos los pronósticos en el primer tiempo quedaron confirmados, si solo se juegan 4 ½ entradas y el equipo de casa va ganando, el primer tiempo será confirmado como un Juego Corto (ML es Acción). Todos los pronósticos se basan en lanzadores ya listados.
								  </p>
								  <h4>MLB - Segundo Tiempo</h4>
								  <p>
								  	Los pronósticos se basan en el marcador a partir de la sexta (6) entrada y hasta el final del partido. Tiene que ser un partido completo (9 entradas; 8 ½ si el equipo de casa va ganando).  Todos los pronósticos incluyen las entradas extras y son de acción sin importar los lanzadores.
							  	</p>
								  <h4>Total de impactos, carreras y errores</h4>
								  <p>
										Tiene que ser un partido completo – 9 entradas - para tener "acción" (8 ½ si el equipo de casa está ganando).
								  </p>
								  <h4>MLB - Equipo que Anota Primero</h4>
								  <p>
										El primer equipo en anotar durante el partido. Si hay una anotación pero el partido es cancelado o aplazado, todos los pronósticos siguen en pie sin importar cuántas entradas han jugado. Todo pronóstico se basa en lanzadores listados.
								  </p>
								  <h4>MLB - Equipo que Anota Último</h4>
								  <p>Tiene que ser un partido oficial. Todo pronóstico se basa en lanzadores ya listados.</p>
								  <h4>MLB - ¿Habrá una carrera en la primera entrada?</h4>
								  <p>
								  	Si se marca una carrera en la primera entrada y el partido es cancelado o pospuesto, todos los pronósticos se mantienen. Si se completa la primera entrada y no se marcó ninguna carrera, y el partido es pospuesto o cancelado, todos los pronósticos se mantienen. Todos los pronósticos son con base en los lanzadores listados.
									</p>
									<h4>MLB - Total de Equipo de Béisbol</h4>
									<p>
										Tiene que haber 9 entradas completas (8½ si el equipo de casa está ganando). Todo pronóstico se basa en lanzadores listados.
									</p>
									<h4>MLB - 2 ½ Líneas de Carreras/ Líneas de Carreras Alternativas y Equipo que tiene el mayor cantidad de anotaciones (home-runs)</h4>
									<p>
										Todos los pronósticos se basan en lanzadores listados. El partido debe de durar 8 ½ entradas como mínimo, si el equipo de casa se está ganando, de otro modo el partido tiene que ser concluido en su totalidad. Todo pronóstico se basa en lanzadores listados. El partido tiene que durar 5 entradas completas, como mínimo, para tener "acción". Las ultimas 4 entradas más las entradas extra estarán disponibles hasta el primer lanzamiento de juego.
									</p>
									<h3>Basbell Internacional y sus Reglas</h3>
									<p>
										Todos los juegos deben de empezar en la fecha y hora estipulada para que las apuestas tengan acción
										Si se suspende una jugada antes de que se complete el tiempo de juego estipulado en el evento, los pronósticos no tendrán acción.
										Si la liga/país permite juegos empatados, las reglas estándares para moneyline y handicap aplicaran al caso.
									</p>
									</div>
								</div>
								<br/>
								<div id="basketball">
									<h2>Basketball</h2>
									<h3>Tiempo de Juego Oficial</h3>
									<p>
										Los pronósticos son oficiales luego de 43 minutos de juego en partidos de NBA o 35 minutos de juego en partidos de baloncesto universitario y WNBA. De no cumplirse el tiempo, los pronósticos se cancelan.
										<br/>
										Los juegos deben de ser jugados en el lugar y fecha en que se programaron. En caso de un cambio en la fecha, todos los pronósticos se cancelan.
									</p>
									<ul>
										<li>
											Tiempo extra cuenta para las apuestas seleccionadas a juego completo y segunda mitad (únicamente).
										</li>
										<li>
											Tiempo extra no cuenta para apuestas seleccionadas a 4to cuarto.
										</li>
									</ul>
									<h3>Basquetbol Internacional</h3>
									<p>
										Todos los juegos deben de empezar en la fecha y hora estipulada para que las apuestas tengan acción
										<br/>
										Si se suspende una jugada antes de que se complete el tiempo de juego estipulado en el evento, los pronósticos no tendrán acción.
										<br/>
										Si la liga/país permite juegos empatados, las reglas estándares para moneyline y handicap aplicaran al caso.
									</p>
								</div>
								<br/>
								<div id="boxeo">
									<h2>Boxeo</h2>
									<ul>
										<li>
											Se aceptan pronósticos hasta el comienzo del primer round.
										</li>
										<li>
											Para pronósticos en el Total de Rounds, 4½ significa que se deben completar cuatro rounds y cubrir la mitad del quinto round.
										</li>
										<li>
											Se toma como resultado oficial la decisión del organismo regulador el día de la pelea.
										</li>
										<li>
											Si se ofrece una opción de Empate, todos los pronósticos a Ganador para ambos participantes se consideran perdedores.
										</li>
										<li>
											En modalidad Round por Round, si un peleador no responde a la campana de inicio se considera el round anterior como el último.
										</li>
										<li>
											Si el número de rounds programados es variado, los pronósticos en esta modalidad se anulan.
										</li>
										<li>
											Todos los pronósticos a Ganador serán decididos por el criterio de los jueces de la pelea. Esta decisión incluye el marcador de puntos, ‘Knock Out’ Técnico, ‘Knock Out’ o descalificación.
										</li>
										<li>
											Si un evento es adelantado, abandonado o pospuesto, pero tiene lugar 14 días antes o después de la fecha original, los pronósticos se consideran válidos. Después de 14 días, los pronósticos serán anulados.
										</li>
									</ul>
								</div>
								<br/>
								<div id="cricket">
									<h2>Cricket</h2>
									<p>
										Mínimo una bola debe de ser boleada para que los pronósticos tengan validez. Si el partido es abandonado debido a condiciones climáticas no aptas para lanzar, todos los pronósticos sin definir en el campo serán nulos.
										<br/>
										Para bateos o boleos cara a cara, ambos bateadores deben de llegar al crease, o ambos boleadores deben de bolear una bola al menos para que los pronósticos se mantengan. De lo contrario los pronósticos serán nulos y el dinero será devuelto.
										<br/>
										En los juegos de un día que se vean afectados por condiciones atmosféricas, el resultado será determinado por las Reglas de Competición. Si se declara como sin-resultado, los pronósticos serán nulos y el dinero devuelto.
										<br/>
										Las apuestas en Cricket Australiano Domestico están basados en la mayor cantidad de puntos ganados durante el juego.
									</p>
								</div>
								<br/>
								<div id="futbol-americano">
									<h2>Fútbol Americano</h2>
									<h3>Tiempo de Juego Oficial</h3>
									<p>
										Los pronósticos se consideran oficiales después de 55 minutos de juego. Si no se completan los 55 minutos de juego, los pronósticos de los equipos serán anulados, y las jugadas combinadas se reducirán al siguiente nivel de la forma correspondiente. Los pronósticos de primera y segunda mitad, y de todos los cuartos serán válidos cuando se complete el período en cuestión. Si por las condiciones el período es acortado, todos los pronósticos en ese período serán anulados. Los pronósticos de línea de diferencia de puntos, línea de dinero, totales del juego, y todos los pronósticos en la segunda mitad incluyen el resultado del tiempo extra. Los pronósticos del último cuarto no incluyen el resultado del tiempo extra.
										El partido debe de ser jugado en el lugar y fecha programado.
									</p>
									<h3>Jugadas Especiales (PROPS) para Liga NFL</h3>
									<h4>NFL - EQUIPO QUE ANOTA PRIMERO:</h4>
									<p>Primer equipo que anote en el juego. Si un equipo anota y el juego se cancela o pospone para después, todos los pronósticos serán válidos sin importar cuantos minutos hayan pasado.</p>
									<h4>NFL - EQUIPO QUE ANOTA ÚLTIMO:</h4>
									<p>Debe ser un juego oficial (55 minutos de juego). Si el juego se va a tiempos extra, el equipo que anote de último será el ganador.</p>
									<h4>NFL - HAY ANOTACIÓN EN LOS PRIMEROS 7½ MINUTOS:</h4>
									<p>Se deben jugar al menos 7 ½ minutos. Si el juego se cancela o pospone después de 7 ½ minutos de juego, todos los pronósticos son válidos.</p>
									<h4>NFL - PRIMERA ANOTACIÓN (‘Touchdown’, Gol de Campo, ‘Safety’)</h4>
									<p>Si un equipo anota y el juego es cancelado o pospuesto, todos los pronósticos son válidos  sin importar cuantos minutos hayan pasado.</p>
									<h4>NFL - 3 ANOTACIONES SEGUIDAS SIN RESPUESTA</h4>
									<p>No cuentan puntos extra ni conversiones de 2 puntos.</p>
									<p>PROPS DE JUGADOR:</p>
									<ul>
										<li>
											Todos los jugadores deben poner su acción en el campo y en la jugada. Los resultados se basan en las estadísticas oficiales del juego.
										</li>
										<li>
											Un pateador que no tenga la oportunidad de participar pero que se encuentre en la lista de jugadores presentes en el juego, se considera como activo.
										</li>
									</ul>
									<h4>NCCA Conference Future Rules</h4>
									<p>
										Si la conferencia tiene un juego oficial de Campeonato, el ganador del juego de Campeonato será el ganador de la conferencia.
										<br/>
										Si la conferencia tiene co-campeones, el primer equipo seleccionado por la BCS será denominado como el ganador.
										<br/>
										En caso de que no se denomine un ganador por la BCS, los pronósticos serán cancelados y el dinero devuelto.
									</p>
								</div>
								<br/>
								<div id="golf">
									<h2>Golf</h2>
									<p>Todas las jugadas son acción sin importar si el jugador comienza o no.</p>
									<p>Si un torneo se ve interrumpido o afectado por razones externas, el resultado oficial será utilizado cuando se necesite definir ganadores, sin importar el número de rondas jugadas.</p>
									<p>
										Si hay uno o más participantes empatados, los siguientes tiebreakers aplicaran
										<br/>
										#1: El jugador con la mejor 4ta ronda ganara.
										<br/>
										#2: El jugador con la mejor 3ra ronda ganara.
										<br/>
										#3: El jugador con la mejor 2nda ronda ganara.
										<br/>
										#4: El jugador con la mejor 1era ronda ganara.
									</p>
									<p>
										El torneo debe de ser completado en 7 días después de comenzado para que los pronósticos tengan validez.
										<br/>
										Para pronósticos cara a cara, el ganador que complete la mayor cantidad de hoyos será declarado como ganador. Si ambos jugadores completan el mismo número de hoyos, el jugador con la mayor calificación relativa al par será considerado como ganador. Ambos jugadores deben de comenzar para tener acción.
										<br/>
										Para las apuestas de tres bolas de PGA, el jugador en el grupo de tres que tenga la menor calificación será declarado como el ganador. Si dos o más jugadores empatan, los pronósticos serán calificados como no acción y el dinero devuelto.
										<br/>
										Si un jugador es descalificado antes de que el round sea completado, todas las jugadas serán calificadas como una perdida.
										<br/>
										Handicaps especiales cara a cara
										Restarle el handicap al total final para determinar el ganador. Si el jugador se retira después del inicio o no logra pasar, el jugador con mayor cantidad de hoyos ganara. Las finales no cuentan para este tipo de pronósticos. 
									</p>
								</div>
								<br/>
								<div id="hockey">
									<h3>Reglas generales para Pronósticos en Hockey</h3>
									<p>
										El juego se vuelve oficial (hay acción) después de 55 minutos de juego. Los goles anotados durante los tiempos extra se incluyen para los pronósticos sobre el partido, pero no se incluyen para los pronósticos sobre el 3er período.
										<br/>
										Si el juego requiere muerte súbita para determinar al ganador, se adjudicará un Gol al ganador para el puntaje final (independientemente del número de goles anotados en la muerte súbita), que se reconocerá para el cálculo del número total de goles anotados y el número de goles anotados por el equipo vencedor.
										<br/>
										El juego debe llevarse a cabo en el lugar y la fecha estipulados.
									</p>
									<h4>Jugadas de Períodos en la NHL</h4>
									<p>Se deben jugar los 20 minutos completos del período para que haya acción.</p>
									<h4>Línea de tiempos extra de la NHL</h4>
									<p>Las líneas de pronósticos sobre los tiempos extra de la NHL incluyen todos los tiempos extra, independientemente del número de tiempos extra que se jueguen, e incluirá la muerte súbita si esta es necesaria para determinar al ganador.</p>
									<h4>Línea de 3 de la NHL y Hockey Europeo sobre Hielo (Línea con empate)</h4>
									<p>
										La línea de 3 de la NHL y Hockey Europeo sobre Hielo se determina sin tiempos extra para el pronóstico principal (Visitante/Local/Empate/Total), es decir solo incluye los 60 minutos de rigor. Esta opción NO toma en cuenta ni los tiempos extras ni la muerte súbita. Hockey Internacional
										<br/>
										Todos los juegos deben de empezar en la fecha y hora estipulada para que las apuestas tengan acción.
										<br/>
										Si se suspende una jugada antes de que se complete el tiempo de juego estipulado en el evento, los pronósticos no tendrán acción.
										<br/>
										Si la liga/país permite juegos empatados, las reglas estándares para moneyline y handicap aplicaran al caso.
									</p>
								</div>
								<br/>
								<div id="mma">
									<h2>MMA</h2>
									<p>
										Un empate es oficial, donde ninguno de los dos concursantes gana el encuentro.
										<br/>
										Un No Contest es una partida donde el referee denominó la pelea como no acción, por lo que los pronósticos serán devueltos.
										<br/>
										Todas las peleas deben de ser completadas en los 7dias después de anunciada.
										<br/>
										Si la pelea era para título, pero después se ve reducida a una regular, los pronósticos tendrán acción.
										<br/>
										Si se reducen los rounds de una pelea, los pronósticos tendrán acción hasta en los totales. Si son pronósticos en proposiciones, estos serán declarados como No Acción.
									</p>
								</div>
								<br/>
								<div id="rules-general-race">
									<h2>reglas genrales de carreras</h2>
									<p>
										TIEMPO POSPUESTO: Si una carrera o un calificador se cancela o pospone por alguna razón, todas las apuestas serán válidas por 48 horas. Si la postergación dura más de 48 horas, todas las apuestas serán canceladas y todas las apuestas en el evento / conductor serán reembolsadas.
									</p>
									<h3>
										REGLAS GENERALES DE COMPETICIÓN DE MOTOR Y APUESTAS DE NASCAR
									</h3>
									<p>
										Hay dos formas principales de apostar en NASCAR y otros eventos de carreras de motor. Ya sea en el ganador de la carrera de la derecha o en el ganador de un enfrentamiento predeterminado. Apuestas en el campo significa todos los controladores que no están incluidos en los precios ganadores.
									</p>
									<p>
										EJEMPLO:
										<br/>
										(Apuesta directa): Jeff Gordon 1/1 o 100 para ganar 100 Dale Jarrett 2/1 o 100 para ganar 200 Mark Martin 2/1 o 100 para ganar 200 Mark Skinner 5/2 o 100 para ganar 250 Dale Ernhardt 7/5 o 100 para ganar 140 Si un conductor alternativo reemplaza a un conductor durante la carrera, entonces el nuevo conductor reemplazará al viejo en todos los enfrentamientos y accesorios. Algunos enfrentamientos entre conductor y conductor pueden tener una desventaja. Ejemplo (Si Kyle Bush tiene una posición de -2.5 contra otro piloto, eso significa que Kyle Bush debe ganar esa partida por 3 posiciones o más desde donde terminan en la conclusión de la carrera). Al ofrecer apuestas en vivo en los enfrentamientos de Nascar, esos enfrentamientos serán para toda la carrera.
									</p>
									<h3>
										APUESTAS DE FORMULA 1 REGLAS GENERALES
									</h3>
									<p>
										Las apuestas en las carreras de Fórmula Uno (F1), Automóvil y Auto se deciden en la posición de podio del día de la entrega de premios para el evento en particular; cualquier cambio de posición después de este tiempo no se tiene en cuenta para establecerse. Si dos pilotos abandonan la carrera después de completar el mismo número de vueltas, el respectivo enfrentamiento se considerará nulo, de lo contrario, el conductor que complete la mayor cantidad de vueltas será considerado ganador si ambos pilotos no logran finalizar la carrera. Apuestas en el campo significa todos los controladores que no están incluidos en los precios ganadores.
										<br/>
										Para ganar la carrera: el 60% del campo de inicio debe comenzar la carrera por la acción. Top 3 (podio): el 80% del campo de inicio debe comenzar para la acción. Enfrentamientos de pilotos: Ambos pilotos deben comenzar la carrera por la acción.
									</p>
								</div>
								<br/>
								<div id="rugby">
									<h2>Rugby</h2>
									<p>
										Cuando se ofrece una opción de sorteo, la apuesta se decide sobre el resultado en el momento de la reglamentación, no se incluye tiempo adicional.
										En caso de un cambio de oponente del anunciado, todas las apuestas para ese partido se clasificarán como No Acción.
										Apuestas directas solamente.
									</p>
								</div>
								<br/>
								<div id="futbol">
									<h2>Fútbol</h2>
									<h3>90 minutos de juego</h3>
									<ul>
										<li>
											Todos los mercados de partidos se basan en el resultado al final de una jugada programada de 90 minutos, a menos que se indique lo contrario. Esto incluye cualquier lesión adicional o tiempo de suspensión, pero no incluye el tiempo extra, el tiempo asignado para una tanda de penaltis o un gol dorado.
										</li>
										<li>
 											Cualquier partido abandonado antes de la finalización de 90 minutos de juego será nulo, calificado como no acción, excepto para aquellas apuestas cuyo resultado ya ha sido determinado en el momento del abandono.
										</li>
										<li>
											Las fechas y horas de inicio de fútbol mostradas en nuestro sitio web son solo indicativas y no se garantiza que sean correctas. Si una partida no comienza como está programada y no comienza el mismo día, las apuestas en la partida no tendrán acción y se reembolsarán. La excepción es cualquier apuesta sobre si un equipo avanza en una competencia de copa, o sube la copa, tendrá acción independientemente de un partido suspendido o pospuesto.
										</li>
										<li>
											Para las apuestas de la Copa Mundial de la FIFA, si un partido no comienza en la hora programada exacta o no comienza en la fecha de inicio original, todas las apuestas en ese partido se mantendrán y se resolverán cuando el juego se complete, independientemente de la fecha o tiempo jugado. Se aplicará la misma regla en caso de que un juego se posponga o abandone antes de la finalización de 90 minutos.
										</li>
									</ul>
									<h3>Tipos de apuestas de fútbol</h3>
									<h4>Hándicap Asiático o Línea de Gol</h4>
									<p>
										Los juegos de fútbol pueden tener un Hándicap individual o un Hándicap doble. 
										<br/>
										Hándicap individual: este tipo de apuesta es similar a una apuesta en el spread en fútbol y baloncesto.
										<br/>
										Por ejemplo: Real Madrid -1 -130 Barcelona +1 +110
										<br/>
										Si el Real Madrid gana el partido por dos goles o más, los apostadores del Real Madrid ganan y los apostadores del Barcelona pierden. Si el partido se empata o si Barcelona gana, los apostadores de Barcelona ganan y los apostantes del Real Madrid pierden. Si el Real Madrid gana exactamente un gol, todos los apostadores recibirán un reembolso.
									</p>
									<h4>Hándicap doble</h4>
									<p>
										Este tipo de apuesta divide una apuesta en dos apuestas, cada una con la misma línea de dinero, pero con un hándicap único diferente.
										<br/>
										Por ejemplo:
										<br/>
										Real Madrid -1¼ -115
										<br/>
										Barcelona + 1¼ -105
										<br/>
										Un cliente que arriesga $ 100 en Real Madrid en realidad tiene dos apuestas separadas en Real Madrid: $ 50 en Real Madrid -1 a -115 y $ 50 en Real Madrid -1.5 a -115.
										Un cliente que arriesga $ 50 en Barcelona en realidad tiene dos apuestas separadas en Barcelona: $ 25 en Barcelona +1 en -105 y $ 25 en Barcelona +1.5 en -105.
										<br/>
										Línea de Dinero de 3 Resultados ó 1x2
										<br/>
										Las apuestas de la línea de dinero tienen tres resultados, puede elegir cualquiera de los equipos para ganar, o puede elegir un sorteo, todas las apuestas realizadas en cualquiera de los equipos serán calificadas como perdedoras en caso de que el juego termine como empate.
										<br/>
										Equipo A
										<br/>
										Equipo B
										<br/>
										Empate
										<br/>
										Total de objetivos: por encima y por debajo Objetivo total significa apostar determinado por la suma total de la cantidad de goles marcados en un Evento.
										<br/>
										Un partido debe alcanzar el tiempo completo para que las apuestas sobre el número total de goles anotados en el partido sean válidas.
									</p>
									<h4>Apuestas de la 1ra mitad</h4>
									<p>
										Las apuestas en la primera mitad de un partido de fútbol incluyen 45 minutos de juego más cualquier tiempo de detención agregado por el árbitro al final de la primera mitad. Si la primera mitad no se completa, las apuestas se anularán y se devolverán las apuestas.
									</p>
									<h4>Apuestas de la 2da mitad</h4>
									<p>
										Las apuestas en la segunda mitad de un partido de fútbol incluyen 45 minutos de juego más cualquier tiempo de detención agregado por el árbitro al final de la segunda mitad. Períodos adicionales, goles dorados y tiroteos no están incluidos en la segunda mitad de las apuestas. Los goles marcados en la primera mitad no cuentan para la apuesta de la segunda mitad.
									</p>
									<p>
										Apuesta en los equipos para clasificar, avanzar a la siguiente ronda de una competencia o en un equipo que gane una copa o trofeo específico.
									</p>
									<p>
										Las apuestas se pagan con el silbido final del árbitro en la conclusión natural del partido, ya sea que el partido se decida en el tiempo reglamentario, el tiempo extra o en una definición por penales. El tiempo extra y los penaltis siempre se incluyen para apostar.
									</p>
									<h4>Proposiciones de juego</h4>
									<p>
										A menos que se indique lo contrario, el resultado de las apuestas de proposición de fútbol se refiere a la puntuación al final del tiempo regular, más el tiempo de la lesión. Las patadas de tiempo extra y penal no están incluidas.
										<br/>
										Para proposiciones que incluyen jugadores, todas las apuestas se tratarán como "Todo dentro". Todos los jugadores citados tienen acción, independientemente de si un jugador se retira antes de que comience el torneo o si no comienza el juego y se resuelve como una pérdida.
									</p>
									<h4>Equipo para dar inicio</h4>
									<p>
										Equipo para dar inicio se refiere a las apuestas sobre qué equipo dará inicio al evento.
										Equipo individual por encima / por debajo (totales del equipo)
										<br/>
										Un solo equipo por encima / por debajo significa una apuesta al número de goles marcados por cualquier equipo en un partido.
									</p>
									<h4>
										Esquinas: esquinas totales, esquinas de desventaja, primer y último rincón
									</h4>
									<ul>
										<li>
											Una esquina no cuenta hasta que realmente se haya tomado (en lugar de cuando se otorga).
										</li>
										<li>
											Esquinas totales se refiere a las apuestas sobre el número total de esquinas tomadas por ambos equipos durante un partido.
										</li>
										<li>
											Hándicap significa apostar en qué equipo tomará más curvas durante un partido, incluyendo cualquier hándicap.
										</li>
										<li>
											Primer rincón significa apostar en qué equipo tomará la primera curva en un partido.
										</li>
										<li>
 											El último rincón significa apostar en qué equipo tomará la última curva de un partido.
										</li>
									</ul>
									<h4>
										Reservas: reservas totales, reservas de discapacitados, primeras y últimas reservas
									</h4>
									<ul>
										<li>
											Total de reservas significa apostar en la cantidad total de cartas recibidas por ambos equipos durante un partido.
										</li>
										<li>
											Una tarjeta amarilla cuenta como un punto y una tarjeta roja cuenta como dos puntos. La cantidad máxima de puntos que un jugador puede recibir durante un partido es de tres (uno para un amarillo y dos para un rojo, la segunda tarjeta amarilla no cuenta).
										</li>
										<li>
											Hándicap significa apostar en qué equipo recibirá la mayor cantidad de cartas durante un partido, incluyendo cualquier hándicap.
										</li>
										<li>
											Primera Carta significa apostar a qué equipo recibirá la primera carta (amarilla o roja) en un partido.
										</li>
										<li>
											Si dos o más jugadores reciben una reserva por el mismo incidente, se considerará ganador al jugador que muestre la primera carta del árbitro.
										</li>
										<li>
											Última carta significa apostar en qué equipo recibirá la última carta (amarilla o roja) en un partido.
										</li>
										<li>
											Si dos o más jugadores reciben una reserva por el mismo incidente, se considerará ganador al jugador que muestre la última carta del árbitro.
										</li>
									</ul>
									<h4>Fuera de juego: Primero, Último, Hándicap y Totales</h4>
									<ul>
										<li>
											El primer fuera de juego significa apostar a qué equipo quedará fuera de juego en un partido.
										</li>
										<li>
											El último fuera de juego significa apostar por el equipo que quedará fuera de juego por última vez en un partido.
										</li>
										<li>
											Hándicap significa apostar en qué equipo quedará fuera de juego la mayor cantidad de veces durante un partido, incluyendo cualquier desventaja.
										</li>
										<li>
											Total Fuera de Juego significa apostar en el número total de decisiones de fuera de juego durante un partido.
										</li>
									</ul>
									<h4>Sustituciones: primera y última sustitución</h4>
									<ul>
										<li>
											Primera sustitución significa apostar a qué equipo hará la primera sustitución durante un partido.
										</li>
										<li>
											La última sustitución significa apostar a qué equipo hará la última sustitución durante un partido.
										</li>
										<li>
											Si dos o más jugadores son sustituidos al mismo tiempo, se considera ganador al jugador cuyo número se muestra primero por el cuarto árbitro.
										</li>
									</ul>
									<h4>Clean sheets (“Sábanas limpias”)</h4>
									<p>Clean Sheets significa apostar "Sí" en un equipo para mantener una hoja limpia (no para conceder un gol) o "No" en un equipo para no mantener una hoja limpia (para conceder un gol).</p>
									<h4>Sanciones</h4>
									<p>Esto se refiere a las apuestas sobre una penalización que se otorga y se toma durante un partido.</p>
									<h4>Tiro libre: primero, último, hándicap y totales</h4>
									<ul>
										<li>Un tiro libre no cuenta hasta que realmente se haya tomado (en lugar de cuando se otorga).</li>
										<li>El tiro libre se refiere al tiro libre directo y al tiro libre indirecto. (Excepto Penalty & Goal kick)</li>
										<li>El primer tiro libre significa apostar en qué equipo realizará el primer tiro libre en un partido.</li>
										<li>El último tiro libre significa apostar en qué equipo realizará el último tiro libre en un partido.</li>
										<li>Handicap significa apostar en qué equipo tomará la mayor cantidad de tiros libres durante un partido, incluyendo cualquier handicap.</li>
										<li>Total de tiros libres se refiere a la cantidad total de tiros libres realizados por ambos equipos durante un partido.</li>
									</ul>
									<h4>Patada de gol: primero, último, hándicap y totales</h4>
									<ul>
										<li>
											Una patada de gol se otorga al equipo defensor si la pelota cruza por completo la línea final, como resultado del contacto con un jugador contrario.
										</li>
										<li>
											La primera patada de gol significa apostar en qué equipo tomará la primera patada de gol en un partido.
										</li>
										<li>
											La última patada de gol significa apostar en qué equipo realizará el último saque de arco en un partido.
										</li>
										<li>
											Hándicap significa apostar en qué equipo tomará la mayor cantidad de tiros de goles durante un partido, incluyendo cualquier hándicap.
										</li>
										<li>
											Total de patadas de gol se refiere a la cantidad total de patadas de gol tomadas por ambos equipos durante un partido.
										</li>
									</ul>
									<h4>Lanzar: primero, último, hándicap y totales</h4>
									<ul>
										<li>Se otorga un saque de banda a un equipo si la pelota cruza completamente la línea de toque lateral, como resultado del contacto con un jugador contrario.</li>
										<li>El primer saque de banda significa apostar en qué equipo tomará el primer saque de banda en un partido.</li>
										<li>El último lanzamiento implica apostar a qué equipo tomará el último lanzamiento en un partido</li>
										<li>Hándicap significa apostar a qué equipo realizará el mayor saque de banda durante un partido, incluido cualquier hándicap.</li>
										<li>Total de tiradas se refiere a las apuestas sobre el número total de saque realizado por ambos equipos durante un partido.</li>
									</ul>
									<h4>Resultado correcto</h4>
									<p>Resultado correcto significa apostar para predecir el puntaje final al final del tiempo completo.</p>
									<h4>Medio tiempo / tiempo completo</h4>
									<p>Medio tiempo / tiempo completo significa apostar para predecir tanto el resultado del medio tiempo como el resultado a tiempo completo de un evento.</p>
									<h4>Primer / último / en cualquier momento goleador de goles</h4>
									<p>Se hará todo lo posible para citar al jugador primero / último / en cualquier momento para calificar las probabilidades para todos los posibles participantes. Sin embargo, los jugadores no citados originalmente contarán como ganadores si marcan el primer / último gol.</p>
									<h4>Período de lesiones otorgado al final de la segunda mitad</h4>
									<p>El tiempo de lesión significa el tiempo extra de juego agregado para compensar el tiempo dedicado a atender a los jugadores lesionados durante el partido.</p>
									<h4>Doble oportunidad</h4>
									<ul>
										<li>1 o X: si el resultado es un inicio o un sorteo, las apuestas en esta opción son ganadores.</li>
										<li>X o 2: si el resultado es un sorteo o un empate, las apuestas en esta opción son ganadores.</li>
										<li>1 o 2: si el resultado es un hogar o fuera, entonces las apuestas en esta opción son ganadores</li>
										<p>Para las apuestas de proposiciones con respecto a los goles de casa y fuera en un día específico en una liga / competencia específica, el número exacto de partidos se jugará ese día y las apuestas se decidirán en base a dos mitades de 45 minutos cada una y cada vez que el árbitro agregue para compensar por lesiones y otros paros. Los goles marcados en periodos de tiempo extra o penales no cuentan.</p>
									</ul>
								</div>
								<br/>	
								<div id="tenis">
									<h2>Tenis</h2>
									<p>
										Los partidos de tenis se resolverán como "No Acción" si cualquiera de los jugadores se retira antes de que se complete el partido, en Línea de dinero, spread, total y Establecer Apuestas (resultado exacto) Los partidos deben jugarse dentro de las 48 horas de la hora originalmente programada para que las apuestas tengan acción. Primero y segundo conjunto de líneas se considerará acción una vez completado en el conjunto en cuestión. En el juego de Establecer Apuestas debe completarse para que las apuestas tengan acción.
									</p>
									<h3>CONJUNTO DE APUESTAS DE TENIS:</h3>
									<p>Si un partido de tenis no se completa debido a la retirada o descalificación de un jugador, todas las apuestas de apuestas establecidas se considerarán nulas. Tales apuestas serán canceladas y el dinero reembolsado.</p>
									<p>Ejemplo: si le ofrecemos al jugador A (-1.5 sets o -2.5 sets) vs Player B (+1.5 sets o +2.5 sets) la combinación debe completarse. Si la coincidencia no se completa, las apuestas en esa línea son nulas. Si le ofrecemos al jugador A que gane exactamente 2 sets a 1 o al jugador B para ganar exactamente 2 sets a 1, esas líneas también se cancelarán y reembolsarán en el caso de una jubilación.</p>
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