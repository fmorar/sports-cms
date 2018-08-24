import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'
import BonusesCta from '../components/BonusesCta'


export const AboutPageTemplate = ({ title, content, description, image, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="about-us">
      <div className="section about-us--hero">
        <div className="container">
          <h2 className="title title__main is-size-3 has-text-weight-bold is-bold-light text-center">
            {title}
          </h2>
        </div>
        <div className="about-us--container">
          <div className="columns">
            <div className="column">
              <img alt="" src={image} />
            </div>
            <div className="column">
              <p className="p-40">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden-height hidden-height__2x"></div>
      <div className="section about-content">
        <div className="container">
          <PageContent className="content" content={content} />
        </div>
      </div>
      <BonusesCta/>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  description: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <AboutPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      image={post.frontmatter.image}
      description={post.frontmatter.description}
      content={post.html}
    />
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image
        description
      }
    }
  }
`
