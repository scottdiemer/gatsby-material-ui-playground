import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'gatsby'
import Button from '@material-ui/core/Button'
import './index.css'
import Layout from '../components/Layout'


const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link style={{textDecoration: 'none'}} to="/page-2/">
      <Button variant="raised" color="primary">
      Go to page 2
      </Button>
    </Link>
  </Layout>
)

export default IndexPage
