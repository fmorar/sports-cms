import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import BonusesCta from '../components/BonusesCta'

export default class Blog extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="blog">
        <div className="blog--hero section-title">
          <h2 className="title title__main is-size-3 has-text-weight-bold is-bold-light text-center">Blog</h2>
        </div>
        <div className="section">
          <div className="container latest-blog">
            <div className="columns">
              <div className="column">
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
                              Ver más!
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <BonusesCta/>
      </div>
    )
  }
}

Blog.propTypes = {
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
