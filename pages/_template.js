import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'

class Template extends React.Component {
  render () {
    const { location, children } = this.props
    let header
    if (location.pathname === prefixLink('/')) {
      header = (
        <div>
          <h1>
            <Link
              to={prefixLink('/')}
            >
              {config.blogTitle}
            </Link>
          </h1>
          <h3>
            Web + iOS
          </h3>
        </div>        
      )
    } else {
      header = (
        <h3>
          <Link
            to={prefixLink('/')}
          >
            {config.blogTitle}
          </Link>
        </h3>
      )
    }
    return (
      <div className='app'>
        <div className='logo'>
            <Link to={prefixLink('/')}>land of dev</Link>
        </div>
        <div className='flex'>
          {header}          
          {children}
        </div>
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.any,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
