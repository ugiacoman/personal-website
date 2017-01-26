import React from 'react'
import { config } from 'config'
import { prefixLink } from 'gatsby-helpers'
import TiSocialInstagram from 'react-icons/lib/ti/social-instagram';

class Bio extends React.Component {
  render () {
    return (
      <div>
        <p>
          <strong>{config.authorName}</strong> likes to build in the land of dev. Follow on <a id='instagram' href="https://www.instagram.com/ulisantosg/" target='_blank'><TiSocialInstagram/></a>
        </p>
        <p>
          Projects | Github
        </p>
      </div>
    )
  }
}

export default Bio
