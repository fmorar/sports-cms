import React from 'react'
import Link from 'gatsby-link'

const  SingupHome = () => (
  <div className="singup-cta">
    <h2 className="text-center">Open an account</h2>
    <form action="" method="post" netlify>
      <div className="field">
        <label className="label label--singup">Name</label>
        <div className="control">
          <input className="input" type="text" placeholder="Full name"/>
        </div>
      </div>
      <div className="field">
        <label className="label label--singup">Phone</label>
        <div className="control">
          <input className="input" type="text" placeholder="Phone number"/>
        </div>
      </div>
      <div className="field">
        <label className="label label--singup">E-mail</label>
        <div className="control">
          <input className="input" type="text" placeholder="E-mail"/>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <button className="button button--singup is-large is-fullwidth">Join now!</button>
        </div>
      </div>
      <p className="terms text-center">
        By registering you agree to our privacy policy, terms and conditions and indicate you are over 18 years of age.
      </p>
    </form>
  </div>
)
export default SingupHome