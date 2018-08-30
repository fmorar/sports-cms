import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Content, { HTMLContent } from '../components/Content'
import BonusesCta from '../components/BonusesCta'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  image,
  helmet,
}) => {
  const PostContent = contentComponent || Content
  let bgDynamic = {
    backgroundImage: 'url(' + image + '), linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)',
    backgroundBlendMode: 'luminosity',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    color: 'white',
    position: 'relative',
    height: '200px',
  };
  return (
    <div className="blog-post">
      {helmet || ''}
      <div style={bgDynamic} className="blog-post--hero">
        <h2 className="section-title section-title__blog-post title title__main is-size-3 has-text-weight-bold is-bold-light text-center">
          {title}
        </h2>
      </div>
      <div className="section">
        <div className="container content">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <p>
                {description}
              </p>
              <PostContent content={content} />
              {tags && tags.length ? (
                <div className="pt-50">
                  <h4>Tags</h4>
                  <div className="tags">
                    {tags.map(tag => (
                      <span className="tag tag-blog is-rounded is-medium is-link" key={tag + `tag`}>
                        <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <BonusesCta/>
    </div>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <BlogPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      helmet={<Helmet title={`${post.frontmatter.title} | Blog`} />}
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
      image={post.frontmatter.image}
    />
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        image
        description
        tags
      }
    }
  }
`
