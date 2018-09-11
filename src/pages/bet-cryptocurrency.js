import React from 'react'
import Link from 'gatsby-link'
import BonusesCta from '../components/BonusesCta'
import cryto from '../img/crypto.png'
import cryto2 from '../img/crypto-02.png'


export default class Cryptocurrency extends React.Component {
  render() {
    return (
		<div className="cryptocurrency-page"> 
			<div className="cryptocurrency--hero section-title">
				<h2 className="title title__main is-size-3 has-text-weight-bold is-bold-light text-center">Criptomonedas</h2>
			</div>
			<div className="section">
				<div className="container">
					<div className="columns">
						<div className="column cryto-content is-flex">
							<div>
								<p className="title">¿Sabía que puede financiar su cuenta de apuestas deportivas con criptomonedas?</p>
								<p>Las criptomonedas son el nuevo dinero digital que reemplaza las opciones tradicionales de efectivo y tarjetas de crédito.</p>
								<Link to="/bonuses-crypto" className="button is-rounded mt-30">Obtenga un Crypto bonus</Link>
							</div>
						</div>
						<div className="column">
							<img className="image image-center" src={cryto} alt="Imagen sobre crytomonedas"/>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-gradient">
				<div className="section">
					<div className="container">
						<div className="columns">
							<div className="column">
								<img className="image image-center" src={cryto2} alt="Imagen sobre crytomonedas"/>
							</div>
							<div className="column cryto-content is-flex">
								<div>
									<p className="title text-white">¿Por qué elegir cryptomonedas?</p>
									<p className="text-white">Las nuevas monedas digitales le brindan tres ventajas principales</p>
									<div className="columns is-multiline pt-50">
										<div className="column is-4">
											<p className="text-white"><strong className="text-white">Velocidad:</strong> las transacciones de cifrado se procesan en cuestión de segundos.</p>
										</div>
										<div className="column is-4">
											<p className="text-white"><strong className="text-white">Seguridad:</strong> cada compra y venta se realiza de forma segura y encriptada</p>
										</div>
										<div className="column is-4">
											<p className="text-white"><strong className="text-white">Anónimo:</strong> se procesa de manera segura y  confidencial.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="white-bg">
				<div className="section">
					<div className="container">
						<div className="columns">
							<div className="column cryto-content is-flex">
								<div>
									<p className="title">¿Dónde puedo obtener Crypto monedas?</p>
									<p>Para esta guía rápida, hemos seleccionado tres servicios principales para su consideración:</p>
									<ul className="pt-30">
										<li><a className="button is-text" href="https://www.coinbase.com/">Coinbase</a></li>
										<li><a className="button is-text" href="https://bitpay.com/">Bitpay</a></li>
										<li><a className="button is-text" href="https://coinmama.com">Coinmama</a></li>
									</ul>
								</div>
							</div>
							<div className="column gif">
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