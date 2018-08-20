import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Carousel from 'nuka-carousel';
import Steps from '../components/Steps'
import SingupHome from '../components/SingupHome'
import CrytpCta from '../components/CrytpCta'
import BonusesHome from '../components/BonusesHome'
import slide1 from '../img/slide1.jpg'


export default class IndexPage extends React.Component {
  state = {
    slideIndex: 0
  };
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
        <div className="section">
          <div className="container latest-blog">
            <div className="content">
              <h3 className="has-text-weight-bold is-size-2">Blog</h3>
            </div>
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
          excerpt(pruneLength: 400)
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