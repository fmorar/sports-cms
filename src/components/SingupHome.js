import React from 'react'
import Link from 'gatsby-link'

const  SingupHome = () => (
  <div className="singup-cta">
    <h2 className="text-center">Abre una cuenta</h2>
    <form action="" method="post">
      <div className="field">
        <label className="label label--singup">Nombre</label>
        <div className="control">
          <input className="input" type="text" placeholder="Ej: juan perez"/>
        </div>
      </div>
      <div className="field">
        <label className="label label--singup">Teléfono</label>
        <div className="control">
          <input className="input" type="text" placeholder="Ej: 1-866-590-6623"/>
        </div>
      </div>
      <div className="field">
        <label className="label label--singup">Correo electrónico</label>
        <div className="control">
          <input className="input" type="text" placeholder="Ej: name@name.com"/>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <button className="button button--singup is-large is-fullwidth">Regístrate ahora!</button>
        </div>
      </div>
      <p className="terms text-center">
        Al registrarte, aceptas nuestra política de privacidad, los términos y condiciones indicas que eres mayor y tienes la edad minima para usar este sitio web.
      </p>
    </form>
  </div>
)
export default SingupHome