import React from 'react'
import Head from 'next/head'

function layoutHoc (Child) {
  return class WrappedComponent extends React.Component {
    static getInitialProps (context) {
      return Child.getInitialProps(context)
    }
    render () {
      return (
        <div>
          <Head>
            <title>Uli</title>
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          </Head>
          <Child {...this.props} />
          <style jsx global>{`
            html, body {
              font: 13px Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
              margin: 2em;
            }
            a {
              text-decoration: none;
            }
            h1, h2, h3, h4, a {
              color: #4DB6AC;
            }
          `}</style>
        </div>
      )
    }
  }
}

export default layoutHoc
