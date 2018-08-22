import React from 'react'
import * as gtag from '../lib/gtag'

const log = (param) => {
  const isServer = typeof window === 'undefined'

  if (!isServer) {
    gtag.event({
      action: 'click_link',
      category: 'Home',
      label: param
    })
  }
}

export default class Links extends React.PureComponent {
  _logMedium () {
    log("medium")
  }

  _logGithub () {
    log("github")
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
