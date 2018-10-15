import React from 'react'
import ResponsiveDrawer from './ResponsiveDrawer'

const Layout = ({ children }) => (
  <div>
    <ResponsiveDrawer>
      <div style={{ margin: '0 auto', maxWidth: 650, padding: '0 1rem' }}>
      {children}
      </div>
    </ResponsiveDrawer>
  </div>
)

export default Layout
