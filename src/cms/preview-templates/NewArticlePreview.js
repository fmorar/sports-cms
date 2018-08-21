import React from 'react'
import PropTypes from 'prop-types'
import { NewArticleTemplate } from '../../templates/new-article'

const NewArticlePreview = ({ entry, widgetFor }) => (
  <NewArticleTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
    image={entry.getIn(['data', 'image'])}
    alt={entry.getIn(['data', 'alt'])}
  />
)

NewArticlePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default NewArticlePreview
