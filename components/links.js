import React from 'react'
import * as gtag from '../lib/gtag'

export default class Links extends React.PureComponent {
  _logMedium () {
    gtag.logEvent("medium")
  }

  _logGithub () {
    gtag.logEvent("github")
  }

  render () {
    return (
      <div>
        <a
          onClick={this._logGithub}
          href={'//github.com/ugiacoman'}
          target='_blank'
        >
          Github
        </a>
        {` | `}
        <a
          onClick={this._logMedium}
          href={'//medium.com/@ugiacoman'}
          target='_blank'
        >
          Medium
        </a>
      </div>
    )
  }
}
