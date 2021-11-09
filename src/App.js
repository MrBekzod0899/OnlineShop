import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import Header from './components/Header'
// import Navigation from './components/Navigation'
// import Sidebar from './components/Sidebar'
// import Employee from './components/Employee'
import { BrowserRouter } from 'react-router-dom'
import Main from './ECOMMERCE/Components/Main'
import Header from './ECOMMERCE/Components/Header'
import Navbar from './ECOMMERCE/Components/Navbar'
import './ECOMMERCE/index.css'
import './ECOMMERCE/indexmedia.css'

export default class App extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <>
      {/* <Sidebar/> */}
      {/* <Navigation/>
      <Header/>
      <Employee/> */}
        <BrowserRouter>
           <Main/>
        </BrowserRouter>

      </>
    )
  }
}
