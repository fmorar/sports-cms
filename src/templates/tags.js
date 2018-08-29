import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Tag from '../img/tag.svg'

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map(post => (
      <li className="tag--item columns" key={post.node.fields.slug}>
        <picture className="column is-1">
          <img className="image" width="50" src={Tag} alt=""/>
        </picture>
        <Link className="column" to={post.node.fields.slug}>
          <p className="is-size-3">{post.node.frontmatter.title}</p>
        </Link>
      </li>
    ))
    const tag = this.props.pathContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? '' : 's'
    } tagged with “${tag}”`

    return (
        <div className="tags">
          <div className="tags--hero">
            <h2 className="section-title title title__main is-size-3 has-text-weight-bold is-bold-light text-center">Tags</h2>
          </div>
          <div className="section">
            <div className="container">
              <div className="columns">
                <div className="column is-10 is-offset-1">
                  <h3 className="title is-size-4 is-bold-light">{tagHeader}</h3>
                  <ul className="taglist">{postLinks}</ul>
                  <p className="pt-50">
                    <Link to="/tags/">Browse all tags</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
