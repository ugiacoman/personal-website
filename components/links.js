import React from 'react'
import 'isomorphic-fetch'
// import Link from 'next/link'

const url = (param) => {
  return `https://blooming-gorge-88603.herokuapp.com/?username=Uli bot&text=udiscover: ${param}&emoji=:partyparrot`
}

export default class Links extends React.PureComponent {
  _navigateToResume () {
    fetch(url('resume'))
  }

  _navigateToProjects () {
    fetch(url('projects'))
  }

  _navigateToGithub () {
    fetch(url('github'))
  }

  _navigateToMedium () {
    fetch(url('medium'))
  }

  render () {
    return (
      <div>
        <a
          onClick={this._navigateToResume}
          href={'./static/resume.pdf'}
          target='_blank'
        >
          Resume
        </a>
        {` | `}
        <a
          onClick={this._navigateToProjects}
          href={'//devpost.com/ugiacoman'}
          target='_blank'
        >
          Projects
        </a>
        {/* <Link prefetch href="/projects">
          <a>Projects</a>
        </Link> */}
        {` | `}
        <a
          onClick={this._navigateToGithub}
          href={'//github.com/ugiacoman'}
          target='_blank'
        >
          Github
        </a>
        {` | `}
        <a
          onClick={this._navigateToMedium}
          href={'//medium.com/@ugiacoman'}
          target='_blank'
        >
          Medium
        </a>
      </div>
    )
  }
}
