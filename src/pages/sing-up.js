import React from 'react'
import Link from 'gatsby-link'
import SingUP from '../img/sing-up.jpg'

export default class SingUp extends React.Component {
  render() {
    return (
		<div className="sing-up">
			<div className="section">
				<div className="container">
					<div className="card">
					  <div className="columns is-marginless is-paddingless	">
							<div className="column is-8 is-paddingless is-m-top sing-up__form">
								<div className="card-content card-content__login">
									<p className="title">
										Iniciar sesión
									</p>
							    <form className="login" action="" method="post">
							      <div className="field">
							        <label className="label">Usuario</label>
							        <div className="control">
							          <input className="input" type="text" placeholder="Nombre de usuario"/>
							        </div>
							      </div>
							      <div className="field">
							        <label className="label">Contraseña</label>
							        <div className="control">
							          <input className="input" type="password" placeholder="Password"/>
							        </div>
							      </div>

										<div className="field is-grouped">
										  <div className="control">
												<button className="button is-large">iniciar</button>
										  </div>
										  <div className="control">
												{/*<Link to="/" className="button is-large is-text">Olvide mi contraseña</Link>*/}
										  </div>
										</div>

							    </form>
								</div>
							  <div className="footer card-footer is-inherit">
									<p className="content has-text-centered">No tienes una cuenta? <Link to="register">Registrate</Link></p>
							  </div>
							</div>
							<div className="column is-paddingless is-hidden-mobile is-hidden-tablet-only sing-up__img">
								<img className="is-inherit" src={SingUP} alt="Estadio de futbal"/>
							</div>
					  </div>
					</div>
				</div>
			</div>
		</div>
    )
  }
}