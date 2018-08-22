import React from 'react'
import LayoutHoc from '../components/layoutHoc'
import Bio from '../components/bio'

class Index extends React.Component {
  render () {
    console.log(this.props)
    return (
      <div className={'container'}>
        <div>
          <h1>
            Ulises Giacoman
          </h1>
          <h3>
            iOS + Web
          </h3>
          <Bio isServer={this.props.isServer} />
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
