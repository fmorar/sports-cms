import React from 'react'
import Link from 'gatsby-link'
import FaqComponent from '../components/FaqComponent'
import BonusesCta from '../components/BonusesCta'

export default class Faq extends React.Component {
	componentDidMount() {
		const items = document.querySelectorAll(".accordion a");
		function toggleAccordion(){
		  this.classList.toggle('active');
		  this.nextElementSibling.classList.toggle('active');
		}

		items.forEach(item => item.addEventListener('click', toggleAccordion));
	}
  render() {
    return (
		<div className="faq-page"> 
			<div className="faq--hero">
				<h2 className="section-title title title__main is-size-3 has-text-weight-bold is-bold-light text-center">FAQ</h2>
			</div>
			<div className="section">
				<div className="container">
					<FaqComponent/>
				</div>
			</div>
			<BonusesCta/>
		</div>
    )
  }
}