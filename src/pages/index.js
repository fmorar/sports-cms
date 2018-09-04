import React from 'react'
import Link from 'gatsby-link'
import Carousel from 'nuka-carousel'
import Steps from '../components/Steps'
import SingupHome from '../components/SingupHome'
import CrytpCta from '../components/CrytpCta'
import Bonuses from '../components/Bonuses'
import ContactForm from '../components/ContactForm'
import slide1 from '../img/slide1.jpg'


export default class IndexPage extends React.Component {

  constructor(props){
      super(props);
      this.state = {
          isLoading: true,
          slideIndex: 0,
          games: []
      }
  }

  componentDidMount() {
    fetch('https://api.stattleship.com/baseball/mlb/games?status=upcoming',{
      headers: {
        Accept: "application/vnd.stattleship.com; version=1",
        Authorization: "Token token=ab97a593039f0e54e901e60b493307ad",
        "Content-Type": "application/json"
      }
    }).
    then((Response)=>Response.json()).
    then((findresponse)=> {
      //console.log(findresponse.games);
      this.setState({
        games: findresponse.games,
      })
    })
  }

  render() {
    return (
      <section>
        <div className="hero">
          <SingupHome/>
          <Carousel
            slidesToShow={1}
            autoplay={true}
            slideIndex={this.state.slideIndex}
            afterSlide={slideIndex => this.setState({ slideIndex })}
          >
            <img src={slide1} />
            <img src={slide1} />
            <img src={slide1} />
          </Carousel>
          <Steps/>
          <div className="hidden-height"></div>
        </div>
        <div className="section">
          <Bonuses/>
        </div>
        <div className="section real-time-data">
          <div className="container">
            <div className="content">
              <h3 className="has-text-weight-bold is-size-2">Currently Games</h3>
            </div>
            <div className="columns">
              {
                this.state.games.slice(0, 3).map((dynamicData,key) =>
                  <div className="current-games column" key={dynamicData.id}>
                    <div className="columns">
                      <div className="current-games__time column">
                        <p>Live</p>
                        <span>{dynamicData.on}</span>
                        <br/>
                        <span>{(new Date(dynamicData.started_at)).getUTCHours()}:</span>
                        <span>{(new Date(dynamicData.started_at)).getMinutes()}</span>
                      </div>
                      <div className="current-games__title column">
                        <h4>{dynamicData.title}</h4>
                        <span className="broadcast">{dynamicData.broadcast}</span>
                      </div>
                    </div>
                  </div>
                )
              }
            </div>
          </div>
        </div>
        <div className="crypto section">
          <CrytpCta/>
        </div>
        <div id="contact" className="section form-home">
          <ContactForm/>
        </div>
      </section>
    )
  }
}