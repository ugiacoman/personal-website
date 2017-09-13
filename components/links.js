import React from 'react'
import 'isomorphic-fetch'

export default class Links extends React.Component {
  _navigateToResume () {
    fetch('https://blooming-gorge-88603.herokuapp.com/?username=Uli bot&text=udiscover: resume&emoji=:partyparrot')
  }

  _navigateToProjects () {
    fetch('https://blooming-gorge-88603.herokuapp.com/?username=Uli bot&text=udiscover: projects&emoji=:partyparrot')
  }

  _navigateToGithub () {
    fetch('https://blooming-gorge-88603.herokuapp.com/?username=Uli bot&text=udiscover: github&emoji=:partyparrot')
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
        {` | `}
        <a
          onClick={this._navigateToProjects}
          href={'//github.com/ugiacoman'}
          target='_blank'
        >
          Github
        </a>
      </div>
    )
  }
}
