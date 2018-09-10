import React from 'react'
import Link from 'gatsby-link'
import BonusesCta from '../components/BonusesCta'

export default class HouseRules extends React.Component {
  render() {
    return (
		<div className="bonuses-page">
			<div className="bonuses--hero section-title">
				<h2 className="title title__main is-size-3 has-text-weight-bold is-bold-light text-center">Reglas de la casa</h2>
			</div>
			<div className="section">
				<div className="container">
					<div className="content">
						<h2>Regla de la casa</h2>
						<p>Al utilizar este dominio estará bajo estos términos y condiciones.</p>
						<p>Todo cliente debe de ser mayor de edad dependiendo a la jurisdicción que tenga su país.</p>
						<p>El cliente es responsable de las condiciones de pago y proceso de retiros en todo momento.</p>
						<p>Cualquier dato de cliente se tratará como confidencial y no se venderá ninguna información.</p>
						<p>Todas las regulaciones están sujetas a cambios sin necesidad de previo aviso.</p>
						<p>En nuestra gran variedad de eventos VIPSPORTSBOOK limita los montos de acción dependiendo del evento dado. También nos damos la libertad de aumentar o limitar cualquier pronóstico de nuestras cuentas o las mismas cuentas en cualquier momento.</p>
						<p>VIPSPORTSBOOK se limita a cancelar cualquier cuenta en cualquier momento y todo lo que tenga pendiente será cancelado inmediatamente.</p>
						<p>El cliente será responsable de no dar la información a terceros. Cualquier transacción depositada en nuestra cuenta será aceptada.</p>
						<p>Las reglas de todo pronóstico esta sujetas a las reglas oficiales de las vegas.</p>
						<p>Si hay alguna prueba de hacking el pronóstico será cancelado.</p>
						<p>Cualquier material producido y distribuido por VIPSPORTSBOOK estará prohibido sin autorización de VIPSPORTSBOOK.</p>
						<p>VIP SPORTSBOOK no pagará errores de líneas en los pronósticos. Toda jugada con mala línea será cancelada.</p>
						<p>El cliente tendrá que tener presente su legalidad en la zona donde pone los pronósticos.</p>
						<p>Todo depósito en criptomonedas será cancelado de la misma manera.</p>
						<p>Para colocar apuestas, mover líneas o hacer cualquier otro ajuste vía telefónica o internet deberá brindar su contraseña y usuario correspondiente a la cuenta.</p>
						<p>VIP SPORTBOOK responsabiliza a cada usuario del manejo y confidencialidad de sus datos de inicio, todo movimiento generado por terceros con los datos de inicio correctos será recibido sin inconvenientes.</p>
						<p>Brindamos servicios de alta calidad lo cual para seguridad del cliente y resolución de posibles malentendidos, grabará todas las llamadas entrantes para obtener un respaldo. Cualquier reclamo tendrá un plazo de 7 días para plantearlo, de no hacerlo en ese plazo no podrá hacer reclamo alguno.</p>
						<p>VIP SPORTSBOOK se rige bajo el reglamento de las vegas para los juegos suspendidos, juegos continuados y cambio de decisiones.</p>
						<p>El cliente será el responsable de cualquier pronóstico que quede como duplicada o apuestas extraviadas. Asegurarse de confirmar el pronóstico en el sitio web.</p>
						<p>Cada pronóstico será clasificado una vez terminado el evento.</p>
						<p>Se podrá cancelar un pronóstico si está la ingresó en un tiempo de 10 min.</p>
						<p>Todos los eventos tienen que ser jugados en la hora y fechas especificadas.</p>
						<p>Ninguna apuesta en futuros se tomará en cuenta para el rollover.</p>
						<p>Si un cliente está en el teléfono y no se confirma la apuesta será responsabilidad del cliente de volver a llamar he ingresar el pronóstico.</p>
						<p>Todo read back de nuestros clerks tendrá que ser confirmado con usuario y contraseña.</p>
						<p>En caballos se les dará un post time que serán usados para confirmar la jugada y el post time tendrá que ser igual o menor al off time dado en el sitio. Los tiempos no son negociables y son finales. Jugadas en caballos no cuentan como rollover.</p>
						<p>Cualquier error en algún depósito de cuenta será anulada al menos que vip sportsbook no notifique diferente.</p>
					</div>
				</div>
			</div>
			<BonusesCta/>
		</div>
    )
  }
}