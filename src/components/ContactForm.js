import React from 'react'
import Link from 'gatsby-link'
import add2 from '../img/contact-img.png'

const ContactForm = () => (
  <div className="container">
    <div className="content">
      <h3 className="has-text-weight-bold is-size-2">Contáctenos</h3>
    </div>
    <div className="columns">
      <div className="column">
        <form action="" method="post">
          <div className="field">
            <label className="label label--contact">Nombre</label>
            <div className="control">
              <input className="input" type="text" placeholder="Ej: Adam sandler"/>
            </div>
          </div>
          <div className="field">
            <label className="label label--contact">Teléfono</label>
            <div className="control">
              <input className="input" type="text" placeholder="Ej: 1-866-590-6623"/>
            </div>
          </div>
          <div className="field">
            <label className="label label--contact">Correo electrónico</label>
            <div className="control">
              <input className="input" type="text" placeholder="Ej: name@name.com"/>
            </div>
          </div>
          <div className="field">
            <label className="label label--contact">Mensaje</label>
            <div className="control">
              <textarea className="textarea" rows="7" placeholder="Mensaje"></textarea>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <button className="button button--contact is-large is-fullwidth">Enviar</button>
            </div>
          </div>
        </form>
      </div>
      <div className="column is-hidden-mobile">
        <img src={add2} alt="Jugador de NFL lanzando"/>
      </div>
    </div>
  </div>
)
export default ContactForm