import React from 'react'
import Link from 'gatsby-link'
import BonusesCta from '../components/BonusesCta'

export default class Dictionary extends React.Component {

  constructor() {
    super();
    const dictonary = [
    	{
		    id: '1', 
		    term: 'ALL-IN', 
		    definition : 'Apostar TODOS los fondos de la cuenta en una única apuesta.'
    	},
    	{
		    id: '2', 
		    term: 'APUESTA A LARGO PLAZO', 
		    definition : 'Pronósticos para un evento que no está pronto a resolverse. Tipo de apuesta para un resultado futuro.'
    	},
    	{
		    id: '3', 
		    term: 'APUESTA BANKER', 
		    definition : 'El apostador en este caso confía plenamente en acertar su propio pronóstico, y por eso se decide a hacer una apuesta mucho más alta de lo normal.'
    	},
    	{
		    id: '4', 
		    term: 'APUESTA COMBINADA', 
		    definition : 'Consiste en acertar más de 1 resultado en la misma apuesta, para obtener un beneficio más alto.'
    	},
    	{
		    id: '5', 
		    term: 'APUESTA DE HÁNDICAP', 
		    definition : 'Se añaden o restan puntos a las selecciones, para que estén más niveladas.'
    	},
    	{
		    id: '6', 
		    term: 'APUESTA DE HÁNDICAP ASIÁTICO', 
		    definition : 'Consiste en un tipo de apuesta de hándicap, pero este tiene la posibilidad de un doble resultado.'
    	},
    	{
		    id: '7', 
		    term: 'APUESTA DE MITAD/FINAL', 
		    definition : 'Acertar el resultado al descanso y al final del partido en los eventos deportivos que constan de dos tiempos.'
    	},
    	{
		    id: '8', 
		    term: 'APUESTA DE DOBLE OPORTUNIDAD', 
		    definition : 'En inglés Double Chance. Permite apostar por dos de los tres resultados posibles.'
    	},
    	{
		    id: '9', 
		    term: 'APUESTA DE POSICIÓN', 
		    definition : 'Se pronostica el lugar en que acabarán las selecciones de un evento (1º, 2º, etc.).'
    	},
  		{
		    id: '10', 
		    term: 'APUESTA LIVE', 
		    definition : 'Es una apuesta que se realiza durante el transcurso del evento deportivo, en vivo.'
    	},
  		{
		    id: '11', 
		    term: 'APUESTA OVER/UNDER', 
		    definition : 'Apostar a que habrá en un evento (ej. goles) más o un evento menos de lo propuesto por la casa.'
    	},
  		{
		    id: '12', 
		    term: 'APUESTA POR ASALTO', 
		    definition : 'Apuestas a los resultados de un único asalto, sin importar el resultado final del combate.'
    	},
  		{
		    id: '13', 
		    term: 'APUESTA SEGURA', 
		    definition : 'Pronóstico en que el apostador cree que sin duda que se cumplirá al haber un claro favorito.'
    	},
  		{
		    id: '14', 
		    term: 'APUESTA SIMPLE O SENCILLA', 
		    definition : 'El tipo de apuesta más tradicional. Se apuesta a una única selección o pronóstico.'
    	},
  		{
		    id: '15', 
		    term: 'ARBITRAJE', 
		    definition : 'Consiste en apostar a todas las posibilidades para cubrir posibles pérdidas y ganar seguro.'
    	},
  		{
		    id: '16', 
		    term: 'BAD BEAT', 
		    definition : 'Generalmente es conocido como mala racha, una cantidad seguida de apuestas que se acaban perdiendo.'
    	},
  		{
		    id: '17', 
		    term: 'BANKROLL O BANCO', 
		    definition : 'Es el total de fondos con lo que el apostador dispone, ya sea en una o varias casas de apuestas.'
    	},
  		{
		    id: '18', 
		    term: 'BOOKIE', 
		    definition : 'Término inglés que se utiliza “vulgarmente” para referirse a las casas de apuestas.'
    	},
  		{
		    id: '19', 
		    term: 'BOOKMAKER', 
		    definition : 'Es simplemente el término en inglés que significa "casa de apuestas".'
    	},
  		{
		    id: '20', 
		    term: 'CAMBIO DE LAS CUOTAS', 
		    definition : 'Las cuotas de un evento varían a lo largo del tiempo según los nuevos datos que se produzcan.'
    	},
  		{
		    id: '21', 
		    term: 'CASA DE APUESTAS', 
		    definition : 'Compañía dedicada a la industria de las apuestas. Básicamente ofrece ganancias a aquellos que acierten un pronóstico sobre un evento.'
    	},
  		{
		    id: '22', 
		    term: 'CASA DE APUESTAS', 
		    definition : 'Es aquella que ofrece beneficios a quienes aciertan sus pronósticos y consigue sus ganancias propias con los errores de los apostantes.'
    	},
  		{
		    id: '23', 
		    term: 'CASA DE INTERCAMBIO', 
		    definition : 'En este tipo de casa de apuestas, el apostante marca la cuota a la que quiere apostar.'
    	},
  		{
		    id: '24', 
		    term: 'CUOTA', 
		    definition : 'Es el precio al que se va a pagar la apuesta, es el precio por el que se multiplica lo apostado.'
    	},
  		{
		    id: '25', 
		    term: 'CUOTA MAL PUESTA/ERROR', 
		    definition : 'Errores que cometen sin querer las casas de apuestas y que son rectificados.'
    	},
  		{
		    id: '26', 
		    term: 'CUOTA PROMEDIO', 
		    definition : 'lorem,lorem'
    	},
  		{
		    id: '27', 
		    term: 'CUOTAS AMERICANAS', 
		    definition : '"Money Lines". Toman como referente una apuesta de 100 dólares.'
    	},
  		{
		    id: '28', 
		    term: 'CUOTAS BRITÁNICAS', 
		    definition : 'Llamadas "fraccionadas" y se refieren al beneficio que se obtiene si se acierta.'
    	},
  		{
		    id: '29', 
		    term: 'CUOTAS DECIMALES', 
		    definition : 'Son el modelo de cuota que más se utilizan en Europa, excepto en el Reino Unido.'
    	},
  		{
		    id: '30', 
		    term: 'DNB', 
		    definition : 'Elimina la opción del empate; sólo hay ganador o perdedor.'
    	},
  		{
		    id: '31', 
		    term: 'ESPERANZA MATEMÁTICA', 
		    definition : 'Fórmula para calcular el beneficio, que se espera obtener de un resultado específico.'
    	},
  		{
		    id: '32', 
		    term: 'ESTRATEGIA', 
		    definition : 'Es una manera fijada de apostar en la que se sigue un modelo predeterminado.'
    	},
  		{
		    id: '33', 
		    term: 'FAVORITO / NO FAVORITO', 
		    definition : 'Distingue las selecciones se esperan que tengan más / menos posibilidades de ganar.'
    	},
  		{
		    id: '34', 
		    term: 'FULL STAKE', 
		    definition : 'Porcentaje máximo de apuesta que se tiene para una selección.'
    	},
  		{
		    id: '35', 
		    term: 'GOLIATH', 
		    definition : 'Apuesta que combina 8 selecciones en 247 apuestas. Devolución al menos dos aciertos.'
    	},
  		{
		    id: '36', 
		    term: 'H2H (HEAD-TO-HEAD)', 
		    definition : 'Cara a cara entre dos selecciones. Las victorias previas de cada una.'
    	},
  		{
		    id: '37', 
		    term: 'HACER UN PICK', 
		    definition : 'Hacer un pronóstico, elegir una selección en un evento y compartirla al anunciarla.'
    	},
  		{
		    id: '38', 
		    term: 'HEINZ', 
		    definition : 'Consiste en 57 apuestas combinando 6 eventos distintos.'
    	},
  		{
		    id: '39', 
		    term: 'JUGADOR SPRO', 
		    definition : 'Se refiere a aquellos deportistas o participantes que son semi-profesionales'
    	},
  		{
		    id: '40', 
		    term: 'LAY (APOSTAR EN CONTRA)', 
		    definition : 'Posibilidad que ofrecen las casas de apuestas de intercambio de apostar a que algo no suceda.'
    	},
  		{
		    id: '41', 
		    term: 'LIVESCORE', 
		    definition : 'Resultados en vivo. Marcador de un evento en directo'
    	},
  		{
		    id: '42', 
		    term: 'LUCKY 15', 
		    definition : 'Apuesta que combina 4 selecciones en 15 apuestas distintas.'
    	},
  		{
		    id: '43', 
		    term: 'LUCKY 31', 
		    definition : 'Tipo de apuesta que consiste en 31 apuestas con 5 selecciones.'
    	},
  		{
		    id: '44', 
		    term: 'MARTINGALE (O MARTINGALA)', 
		    definition : 'Estrategia de apuestas que consiste en apostar el doble tras perder para cubrir pérdidas.'
    	},
  		{
		    id: '45', 
		    term: 'MONEY MANAGEMENT', 
		    definition : 'Gestión de los fondos que se dedican a hacer apuestas en las distintas casas.'
    	},
  		{
		    id: '46', 
		    term: 'MOVIMIENTO DE CUOTAS', 
		    definition : 'Como los cambios de cuotas, son habituales. Se producen porque hay nuevos datos sobre un evento.'
    	},
  		{
		    id: '47', 
		    term: 'ODDS MAKER', 
		    definition : 'El que hace las cuotas. También conocido como "trader", calculan las probabilidades de un resultado.'
    	},
  		{
		    id: '48', 
		    term: 'ON TILT', 
		    definition : 'Se apuesta impulsivamente, sin estudiar el por qué de nuestra elección.'
		  },
  		{
		    id: '49', 
		    term: 'OVERBETTING', 
		    definition : 'Consiste en apostar sin límite, más de la cuenta con una mala gestión del bankroll.'
		  },
  		{
		    id: '50', 
		    term: 'PATENT', 
		    definition : 'Apuesta que combina tres selecciones de tres eventos en siete apuestas distintas.'
		  },
  		{
		    id: '51', 
		    term: 'PICK', 
		    definition : 'Selección. Es el posible resultado que elegimos entre los posibles en un evento.'
		  },
  		{
		    id: '52', 
		    term: 'PRONOSTICAR', 
		    definition : '"Adivinar" cuál será el resultado final de un evento.'
		  },
  		{
		    id: '53', 
		    term: 'PRONÓSTICO', 
		    definition : 'Es la apuesta final, la opción que creemos que será la ganadora de las posibles en un evento.'
		  },
  		{
		    id: '54', 
		    term: 'RACHA', 
		    definition : 'Tendencia positiva o negativa de un jugador.'
		  },
  		{
		    id: '55', 
		    term: 'ROLLOVER', 
		    definition : 'Número de apuestas o cantidad a apostar para recuperar lo invertido previamente.'
		  },
  		{
		    id: '56', 
		    term: 'SORPRESA', 
		    definition : 'Es cuando el no favorito gana. Es el resultado que por estadística no se debía haber producido.'
		  },
  		{
		    id: '57', 
		    term: 'SPREAD', 
		    definition : 'Apuesta que no pronostica un resultado único sino un rango de resultados probables.'
		  },
  		{
		    id: '58', 
		    term: 'STAKE', 
		    definition : 'Parte del bankroll que destinamos a una apuesta.'
		  },
  		{
		    id: '59', 
		    term: 'STAKE LINEAL', 
		    definition : 'Apostar cierto porcentaje proporcional a la confianza de acierto.'
		  },
  		{
		    id: '60', 
		    term: 'STARTING PRICE', 
		    definition : 'Cuotas iniciales que irán variando antes del evento.'
		  },
  		{
		    id: '61', 
		    term: 'SUPER HEINZ', 
		    definition : 'Un tipo de apuesta que combina 7 selecciones de distintos eventos en 31 apuestas.'
		  },
  		{
		    id: '62', 
		    term: 'SUPER YANKEE', 
		    definition : 'Apuesta de sistema en la que se realizan 26 apuestas con 5 selecciones distintas.'
		  },
  		{
		    id: '63', 
		    term: 'SUREBET (O ARBITRAJE)', 
		    definition : 'Consiste en apostar de manera que siempre se obtengan beneficios, aunque sean menores.'
		  },
  		{
		    id: '64', 
		    term: 'SWIFT', 
		    definition : 'También se conoce como BIC (Banking International Code). Identifica a los bancos.'
		  },
  		{
		    id: '65', 
		    term: 'TEASER', 
		    definition : 'El hándicap dentro de una apuesta combinada varía para que sea más posible acertar.'
		  },
  		{
		    id: '66', 
		    term: 'TIPSTER', 
		    definition : 'Persona que ofrece sus pronósticos como profesional con beneficio.'
		  },
  		{
		    id: '67', 
		    term: 'TRIXIE', 
		    definition : 'Tipo de apuesta que combina tres selecciones en cuatro apuestas.'
		  },
			{
		    id: '68', 
		    term: 'UNDERDOG / OUTSIDER', 
		    definition : 'Lo contrario al favorito. Aquel que tiene muy pocas probabilidades de ganar.'
		  },
			{
		    id: '69', 
		    term: 'VALUE', 
		    definition : 'Cuota que se considera, por parte del apostante, mejor de lo que la casa cree.'
		  },
			{
		    id: '70', 
		    term: 'WALKOVER', 
		    definition : 'Cuando uno de los participantes en un evento deportivo no lo terminan y se retiran.'
		  },
			{
		    id: '71', 
		    term: 'YANKEE', 
		    definition : 'Apuesta que combina en 11 apuestas distintas un total de 4 selecciones.'
		  },
			{
		    id: '72', 
		    term: 'YIELD', 
		    definition : 'Calcula la media de beneficio, teniendo en cuenta aciertos y errores.'
		  }
    ];
    this.state = {
      dictonary: dictonary,
      dictonaryInitial: dictonary,
    };
    
    this._handleChange = this._handleChange.bind(this);
  }
  
  _handleChange (e) {
    const dictonary = this.state.dictonaryInitial.filter(item => item.term.toLowerCase().includes(e.target.value.toLowerCase()));
    this.setState({ dictonary });
  }

  render() {
    return (
		<div className="dictionary-page"> 
			<div className="dictionary--hero">
				<h2 className="section-title title title__main is-size-3 has-text-weight-bold is-bold-light text-center">Diccionario</h2>
			</div>
			<div className="section">
				<div className="container">
		      <div>
		      <div id="search" className="control">
		        <input className="input is-rounded is-medium" type="search" onChange={this._handleChange} placeholder="buscar"/>
		      </div>
		        <ul>
		          {this.state.dictonary.map(item => 
		          	<li className="item-dictionary" key={item.id}>
		          		<p className="title-dictionary">{item.term}</p>
		          		<p className="is-size-6">{item.definition}</p>
		          	</li>
		          	)}
		        </ul>
		      </div>
				</div>
			</div>
			<BonusesCta/>
		</div>
    )
  }
}