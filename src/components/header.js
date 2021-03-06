import React from 'react'
import Link from 'gatsby-link'
import Nav from './Nav'

const Header = ({ siteTitle }) => (
  <div
    style={{
      // background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        margin: '0 auto',
        padding: '1.45rem 1.0875rem',
      }}
    >
      <Nav />
    </div>
  </div>
)

export default Header
