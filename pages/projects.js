import React from 'react'
import LayoutHoc from '../components/layoutHoc'
import Swiftfolio from '../projects/swiftfolio'

class Projects extends React.Component {
  static getInitialProps (context) {
    const { isServer } = context
    return { isServer }
  }

  render () {
    return (
      <div>
        <Swiftfolio />
      </div>
    )
  }
}
export default LayoutHoc(Projects)
