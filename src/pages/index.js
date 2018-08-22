import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Carousel from 'nuka-carousel'
import Steps from '../components/Steps'
import SingupHome from '../components/SingupHome'
import CrytpCta from '../components/CrytpCta'
import BonusesHome from '../components/BonusesHome'
import ContactForm from '../components/ContactForm'
import slide1 from '../img/slide1.jpg'
import add from '../img/add.jpg'


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
      console.log(findresponse.games);
      this.setState({
        games: findresponse.games,
      })
    })
  }

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

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
        <div className="crypto section">
          <CrytpCta/>
        </div>
        <div className="section">
          <BonusesHome/>
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
                      <div class="current-games__title column">
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
        <div className="section blog">
          <div className="container latest-blog">
            <div className="content">
              <h3 className="has-text-weight-bold is-size-2">Blog</h3>
            </div>
            <div className="columns">
              <div className="column is-9">
                <div className="latest-blog">
                  {posts
                    .map(({ node: post }) => (
                      <div
                        className="content columns latest-blog__article"
                        key={post.id}
                      >
                        <figure className="image column is-3">
                          <img className="image__article" src={post.frontmatter.image} alt="Imagen from blog article"/>
                        </figure>
                        <div className="article-content column is-9">
                          <p className="title">
                            <Link to={post.fields.slug}>
                              {post.frontmatter.title}
                            </Link>
                          </p>
                          <p className="text-body">
                            {post.excerpt}
                          </p>
                          <div className="info-wrapper columns">
                            <small className="column">{post.frontmatter.date}</small>
                            <Link className="button is-text column" to={post.fields.slug}>
                              Keep Reading
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <div className="column">
                <img src={add} alt="" />
              </div>
            </div>
            </div>
        </div>
        <div className="section form-home">
          <ContactForm/>
        </div>
      </section>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 4,
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 144)
          id
          fields {
            slug
          }
          frontmatter {
            title
            image
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`