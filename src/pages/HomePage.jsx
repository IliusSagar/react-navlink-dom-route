import React, { Component, Fragment } from 'react'
import {  Link } from 'react-router-dom';

 class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <h1>This is our Home Page</h1>
        <Link to="/login">Login</Link>
      </Fragment>
    )
  }
}

export default HomePage
