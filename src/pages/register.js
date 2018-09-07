import React from 'react'
import Link from 'gatsby-link'
import RegisterImg from '../img/register.png'

export default class Register extends React.Component {

  constructor(props){
      super(props);
      this.state = {
          isLoading: true,
          countries: []
      }
  }

  componentDidMount() {
    fetch('https://restcountries.eu/rest/v2/all',{
    }).
    then((Response)=>Response.json()).
    then((findresponse)=> {
      this.setState({
        countries: findresponse,
      })
    })
  }

  render() {
    return (
		<div className="sing-up">
			<div className="section">
				<div className="container">
					<div className="card">
					  <div className="columns is-marginless is-paddingless	">
							<div className="column is-8 is-paddingless is-m-top">
								<div className="card-content card-content__login">
									<p className="title">
										Registarse
									</p>
							    <form className="login" action="" method="post">
							      <div className="field">
							        <label className="label">Nombre completo</label>
							        <div className="control">
							          <input className="input" type="text" required placeholder="Ej: adam sandler"/>
							        </div>
							      </div>
							      <div className="field">
							        <label className="label">E-mail</label>
							        <div className="control">
							          <input className="input" type="email" required placeholder="Ej: name@name.com"/>
							        </div>
							      </div>
							      <div className="field">
							        <label className="label">Teléfono</label>
							        <div className="control">
							          <input className="input" type="tel" required placeholder="Ej: 1-866-590-6623"/>
							        </div>
							      </div>
							      <div className="field">
							        <label className="label">Código de area</label>
							        <div className="control">
							          <input className="input" type="text" required placeholder="Ej: +506"/>
							        </div>
							      </div>
							      <div className="field">
							        <label className="label">Contraseña</label>
							        <div className="control">
							          <input className="input" type="password" required placeholder="Contraseña"/>
							        </div>
							      </div>
							      <div className="field">
							        <label className="label">Confirmar contraseña</label>
							        <div className="control">
							          <input className="input" type="password" required placeholder="Confirmar contraseña"/>
							        </div>
							      </div>
							      <div className="field">
							        <label className="label">Fecha de nacimiento</label>
							        <div className="control">
							          <input className="input" required type="date"/>
							        </div>
							      </div>

							      <div className="field">
							        <label className="label">Dirección</label>
							        <div className="control">
							          <input className="input" required type="text" placeholder="Ej: Balcarce 50 Piso 2 C1064AAB"/>
							        </div>
							      </div>

							      <div className="field">
							        <label className="label">Zip code</label>
							        <div className="control">
							          <input className="input" required type="text" placeholder="Ej: 1110"/>
							        </div>
							      </div>

							      <div className="field">
						        	<label className="label">País</label>
											<div className="select is-rounded">
											  <select>
						              {
						                this.state.countries.map((dynamicData,key) =>
						                	<option key={dynamicData.numericCode}>{dynamicData.name}</option>
						                )
						              }
											  </select>
									  	</div>
										</div>

							      <div className="field">
							        <label className="label">Quien refiere (Opcional)</label>
							        <div className="control">
							          <input className="input" type="text" placeholder="Ej: VipSport77"/>
							        </div>
							      </div>


										<label className="checkbox">
										  <input required className="is-m-right" type="checkbox"/>
										   Acepto los <Link to="/terms">Terminos y condiciones</Link>
										</label>

										<div className="field is-grouped">
										  <div className="control">
												<button className="button is-large">Crear cuenta</button>
										  </div>
										</div>
							    </form>
								</div>
							  <div className="footer card-footer is-inherit">
									<p className="content has-text-centered">Ya tienes una cuenta? <Link to="sing-up">Inicia sesión</Link></p>
							  </div>
							</div>
							<div className="column is-paddingless is-hidden-mobile is-hidden-tablet-only">
								<img className="is-inherit" src={RegisterImg} alt=""/>
							</div>
					  </div>
					</div>
				</div>
			</div>
		</div>
    )
  }
}