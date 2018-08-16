import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Carousel from 'nuka-carousel';
import Steps from '../components/Steps'
import SingupHome from '../components/SingupHome'
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
        <div className="section">
          <div className="container">
            <div className="content">
              <h3 className="has-text-weight-bold is-size-2">Blog</h3>
            </div>
            {posts
              .map(({ node: post }) => (
                <div
                  className="content"
                  key={post.id}
                >
                  <p>
                    <Link className="has-text-primary" to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <small>{post.frontmatter.date}</small>
                  </p>
                  <p>
                    {post.excerpt}
                    <br />
                    <br />
                    <Link className="button is-small" to={post.fields.slug}>
                      Keep Reading →
                    </Link>
                  </p>
                </div>
              ))}
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
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
