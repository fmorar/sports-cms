import React from 'react'
import Link from 'gatsby-link'

const ModalBanking = () => (
  <div id="modal" className="modal">
    <div className="modal-background"></div>
    <div className="modal-card">
      <header className="modal-card-head">
        <p className="modal-card-title">Modal title</p>
        <button className="delete" aria-label="close"></button>
      </header>
      <section className="modal-card-body">
        <p>soy un modal</p>
      </section>
      <footer className="modal-card-foot">
        <button className="button is-success">Save changes</button>
        <button className="button">Cancel</button>
      </footer>
    </div>
  </div>
)
export default ModalBanking
