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
    <Button variant="raised" color="primary">
      Hello Button
    </Button>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
