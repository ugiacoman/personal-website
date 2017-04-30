import React from 'react'
import { config } from 'config'
import { prefixLink } from 'gatsby-helpers'
import TiSocialInstagram from 'react-icons/lib/ti/social-instagram'

class Bio extends React.Component {
  render () {
    return (
      <div>
        <p>
          <strong>{config.authorName}</strong> likes to build in the land of dev. Follow on <a id='instagram' href='//www.instagram.com/ulisantosg/' target='_blank'><TiSocialInstagram /></a>
        </p>
        <p>
          <a id='projects' href='//devpost.com/ugiacoman' target='_blank'>Projects</a> | <a id='github' href='//github.com/ugiacoman' target='_blank'>Github</a> | <a id='github' href='//udiscover.me/Resume.pdf' target='_blank'>Resume</a>
        </p>
      </div>
    )
  }
}

export default Bio
