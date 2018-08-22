import React from 'react'
import TiSocialInstagram from 'react-icons/lib/ti/social-instagram'
import Links from './links'
import 'isomorphic-fetch'
import * as gtag from '../lib/gtag'

export default class Bio extends React.PureComponent {
  _navigateToInstagram = () => {
    //fetch(`https://blooming-gorge-88603.herokuapp.com/?username=Uli bot&text=udiscover: instagram&emoji=:partyparrot`)
  }

  render () {
    return (
      <div>
        <p>
          <strong> Ulises </strong> likes to build :) Follow on
          <a
            onClick={this._navigateToInstagram}
            href={'//www.instagram.com/ulisantosg/'}
            target={'_blank'}
          >
            <TiSocialInstagram />
          </a>
          <style jsx>{`
            a {
              margin-left: .2em;
              font-size: 2em;
            }
          `}</style>
        </p>
        <Links />
      </div>
    )
  }
}
