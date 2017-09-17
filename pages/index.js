import React from 'react'
import LayoutHoc from '../components/layoutHoc'
import Bio from '../components/bio'

class Index extends React.Component {
  static getInitialProps (context) {
    const { isServer } = context
    return { isServer }
  }

  render () {
    return (
      <div className={'container'}>
        <div>
          <h1>
            Ulises Giacoman
          </h1>
          <h3>
            Web + iOS
          </h3>
          <Bio />
        </div>
        <style jsx>{`
          .container {
            display: flex;
            align-items: center;
            min-height: 24em;
            justify-content: center;
          }
        `}</style>
      </div>
    )
  }
}

export default LayoutHoc(Index)
