import React from 'react'
import Link from 'gatsby-link'

const  SingupHome = () => (
  <div className="singup-cta">
    <h2 className="text-center">Abre una cuenta</h2>
    <form action="" method="post">
      <div className="field">
        <label className="label label--singup">Nombre</label>
        <div className="control">
          <input className="input" type="text" placeholder="Ej: Adam sandler"/>
        </div>
      </div>
      <div className="field">
        <label className="label label--singup">Teléfono</label>
        <div className="control">
          <input className="input" type="text" placeholder="Ej: 1-866-590-6623"/>
        </div>
      </div>
      <div className="field">
        <label className="label label--singup">E-mail</label>
        <div className="control">
          <input className="input" type="text" placeholder="Ej: name@name.com"/>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <button className="button button--singup is-large is-fullwidth">Registrate ahora!</button>
        </div>
      </div>
      <p className="terms text-center">
        Al registrarse, acepta nuestra política de privacidad, los términos y condiciones e indica que es mayor de 18 años.
      </p>
    </form>
  </div>
)
export default SingupHome