import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Footer from './Footer'
import Navbar2 from './Navbar'
import Section from './Section'
import { Route, Switch } from 'react-router'
import Breadcrumbs from './Breadcrumbs'

export default class Main extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>  
                <Header/>    
                <Navbar2/>   
                <Breadcrumbs/>
                <Section/>
                <Footer/>
            </div>
        )
    }
}
