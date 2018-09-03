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
							        <label className="label">Nombre</label>
							        <div className="control">
							          <input className="input" type="text" placeholder="Nombre Completo"/>
							        </div>
							      </div>
							      <div className="field">
							        <label className="label">E-mail</label>
							        <div className="control">
							          <input className="input" type="email" placeholder="mail"/>
							        </div>
							      </div>
							      <div className="field">
							        <label className="label">Phone</label>
							        <div className="control">
							          <input className="input" type="tel" placeholder="phone"/>
							        </div>
							      </div>
							      <div className="field">
							        <label className="label">Contraseña</label>
							        <div className="control">
							          <input className="input" type="password" placeholder="Password"/>
							        </div>
							      </div>
							      <div className="field">
							        <label className="label">Confirmar contraseña</label>
							        <div className="control">
							          <input className="input" type="password" placeholder="Password"/>
							        </div>
							      </div>
							      <div className="field">
							        <label className="label">Fecha de nacimiento</label>
							        <div className="control">
							          <input className="input" type="date"/>
							        </div>
							      </div>

							      <div className="field">
							        <label className="label">Dirección</label>
							        <div className="control">
							          <input className="input" type="text" placeholder="Dirección"/>
							        </div>
							      </div>

							      <div className="field">
							        <label className="label">Ciudad</label>
							        <div className="control">
							          <input className="input" type="text" placeholder="Ciudad"/>
							        </div>
							      </div>

							      <div className="field">
							        <label className="label">Zip code</label>
							        <div className="control">
							          <input className="input" type="text" placeholder="Zip code"/>
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


										<label className="checkbox">
										  <input className="is-m-right" type="checkbox"/>
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