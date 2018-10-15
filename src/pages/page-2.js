import React from 'react'
import { Link } from 'gatsby'
import Button from '@material-ui/core/Button'
import Layout from '../components/Layout'


const SecondPage = () => (
  <Layout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link style={{textDecoration: 'none'}} to="/">
      <Button variant="raised" color="primary">
        Go back to the homepage
      </Button>
    </Link>
  </Layout>
)

export default SecondPage
