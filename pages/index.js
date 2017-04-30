import React from 'react'
import { Link } from 'react-router'
import sortBy from 'lodash/sortBy'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import access from 'safe-access'
import { config } from 'config'
import include from 'underscore.string/include'
import Bio from 'components/Bio'

class BlogIndex extends React.Component {
  render () {
    const pageLinks = []
    // Sort pages.
    const sortedPages = sortBy(this.props.route.pages, (page) =>
      access(page, 'data.date')
    ).reverse()
    sortedPages.forEach((page) => {
      if (access(page, 'file.ext') === 'md' && !include(page.path, '/404')) {
        const title = access(page, 'data.title') || page.path
        pageLinks.push(
          <li
            key={page.path}
          >
            <Link
              to={prefixLink(page.path)}>{title}</Link>
          </li>
        )
      }
    })
    return (
      <div>
        <Helmet
          title={config.authorName}
          meta={[
            {'name': 'description', 'content': 'Ulises Giacoman Web + Mobile Land'},
            {'name': 'keywords', 'content': 'Ulises Giacoman, dev, ios, react-native, react, iOS, android, web'}
          ]}
        />
        <Bio />
        <h4>Writings: </h4>
        <ul>
          {pageLinks}
        </ul>
        <amp-pixel src='https://blooming-gorge-88603.herokuapp.com/?username=Uli bot&text=Someone visited your website.&emoji=:partyparrot' />
      </div>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object
}

export default BlogIndex
